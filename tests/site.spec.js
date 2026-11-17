// End-to-end tests: they open the real site in Chrome and use it like a visitor.
// Expected values come from app/data/content.js, so the tests follow content edits.
import { test, expect } from '@playwright/test'
import { shared, content } from '../app/data/content.js'

const countByBrand = (brand) => shared.products.filter((p) => p.brand === brand).length

// A click that lands before React hydrates does nothing, so retry until the grid updates.
const pickChip = (page, label, expectedCount) =>
  expect(async () => {
    await page.locator('.filter__chip', { hasText: label }).click()
    await expect(page.locator('.product-card')).toHaveCount(expectedCount, { timeout: 1000 })
  }).toPass()

test.describe('Page load', () => {
  test('loads with no errors from the site in the console', async ({ page, baseURL }) => {
    const errors = []
    page.on('pageerror', (err) => errors.push(err.message))
    page.on('console', (msg) => {
      // Ignore third-party frames (e.g. the embedded Google Map).
      if (msg.type() === 'error' && (msg.location().url || '').startsWith(baseURL)) {
        errors.push(msg.text())
      }
    })
    await page.goto('/')
    await page.waitForTimeout(1500)
    expect(errors).toEqual([])
  })

  test('starts in Arabic, right-to-left, with the correct title', async ({ page }) => {
    await page.goto('/')
    await expect(page.locator('html')).toHaveAttribute('lang', 'ar')
    await expect(page.locator('html')).toHaveAttribute('dir', 'rtl')
    await expect(page).toHaveTitle(/SICCO/)
    await expect(page.locator('h1')).toHaveText(content.ar.hero.title)
  })

  test('hero showcase loads its first product and switches brand from the tabs', async ({ page }) => {
    await page.goto('/')
    const first = page.locator('.showcase__slide--on .showcase__img')
    await expect(first).toBeVisible()
    expect(await first.evaluate((el) => el.naturalWidth)).toBeGreaterThan(0)

    const tab = page.locator('.showcase__tab', { hasText: 'Fami' })
    await expect(async () => {
      await tab.click()
      await expect(tab).toHaveAttribute('aria-pressed', 'true', { timeout: 1000 })
    }).toPass()
    await expect(page.locator('.showcase__desc')).toHaveText(content.ar.brands.items.fami.desc)
  })
})

test.describe('Languages (/ = Arabic, /en = English)', () => {
  test('language button goes to /en (English, LTR) and back to / (Arabic, RTL)', async ({ page }) => {
    await page.goto('/')
    const html = page.locator('html')

    await page.locator('.lang-btn').click()
    await expect(page).toHaveURL(/\/en$/)
    await expect(html).toHaveAttribute('lang', 'en')
    await expect(html).toHaveAttribute('dir', 'ltr')
    await expect(page.locator('h1')).toHaveText(content.en.hero.title)

    await page.locator('.lang-btn').click()
    await expect(page).toHaveURL(/\/$/)
    await expect(html).toHaveAttribute('lang', 'ar')
    await expect(html).toHaveAttribute('dir', 'rtl')
    await expect(page.locator('h1')).toHaveText(content.ar.hero.title)
  })

  test('English page is complete in the server HTML (what Google reads)', async ({ request }) => {
    const html = await (await request.get('/en')).text()
    expect(html).toContain('<html lang="en" dir="ltr"')
    expect(html).toContain('Leaders in')
    // (avoid text with "&" — HTML escapes it as &amp;)
    expect(html).toContain('Founded in 1991')
    expect(html).toContain('Investment Law No. 10')
  })

  test('each page tells Google about its other-language version (hreflang)', async ({ page }) => {
    for (const path of ['/', '/en']) {
      await page.goto(path)
      await expect(page.locator('link[rel="alternate"][hreflang="ar"]')).toHaveAttribute('href', /sicco-sy\.com\/?$/)
      await expect(page.locator('link[rel="alternate"][hreflang="en"]')).toHaveAttribute('href', /sicco-sy\.com\/en$/)
    }
  })

  test('product filter also works on the English page', async ({ page }) => {
    await page.goto('/en')
    await pickChip(page, 'Prince', countByBrand('prince'))
  })

  test('unknown URL shows the 404 page', async ({ page }) => {
    const res = await page.goto('/no-such-page')
    expect(res.status()).toBe(404)
    await expect(page.locator('h1')).toHaveText('الصفحة غير موجودة')
    await expect(page.locator('a[href="/"]')).toBeVisible()
  })
})

test.describe('Product filter', () => {
  test('shows every product by default', async ({ page }) => {
    await page.goto('/')
    await expect(page.locator('.product-card')).toHaveCount(shared.products.length)
  })

  for (const brand of shared.brands) {
    const name = content.ar.brands.items[brand.id].name

    test(`"${name}" chip shows only ${name} products`, async ({ page }) => {
      await page.goto('/')
      await pickChip(page, name, countByBrand(brand.id))

      const cards = page.locator('.product-card')
      for (const label of await cards.locator('.product-card__brand').allTextContents()) {
        expect(label).toBe(name)
      }
    })
  }

  test('"All" chip restores the full list', async ({ page }) => {
    await page.goto('/')
    await pickChip(page, 'Fami', countByBrand('fami'))
    await pickChip(page, content.ar.products.all, shared.products.length)
  })
})

test.describe('Navigation', () => {
  test('every in-page link (header + footer) points to a section that exists', async ({ page }) => {
    await page.goto('/')
    const hrefs = await page
      .locator('header a[href^="#"], footer a[href^="#"]')
      .evaluateAll((links) => links.map((a) => a.getAttribute('href')))

    expect(hrefs.length).toBeGreaterThan(0)
    for (const href of hrefs) {
      const exists = await page.evaluate((id) => !!document.getElementById(id), href.slice(1))
      expect(exists, `missing section for ${href}`).toBe(true)
    }
  })

  test('removed "news" section is really gone', async ({ page }) => {
    await page.goto('/')
    await expect(page.locator('#news')).toHaveCount(0)
  })

  test('partners stay hidden until real logos arrive', async ({ page }) => {
    await page.goto('/')
    await expect(page.locator('#partners')).toHaveCount(0)
  })
})

test.describe('Contact', () => {
  // Replace window.open so we can read the link instead of opening WhatsApp.
  const captureWindowOpen = (page) =>
    page.evaluate(() => {
      window.__opened = []
      window.open = (url) => {
        window.__opened.push(url)
        return null
      }
    })

  test('WhatsApp send builds a wa.me link containing the visitor message', async ({ page }) => {
    await page.goto('/')
    await captureWindowOpen(page)

    const form = page.locator('.contact__form')
    await form.locator('input[name="name"]').fill('سمية')
    await form.locator('input[name="email"]').fill('test@example.com')
    await form.locator('textarea[name="message"]').fill('أريد عرض سعر')
    await form.locator('button[type="submit"]').click()

    const opened = await page.evaluate(() => window.__opened)
    expect(opened).toHaveLength(1)
    expect(opened[0]).toContain(`https://wa.me/${shared.whatsapp}?text=`)
    const text = decodeURIComponent(opened[0].split('text=')[1])
    expect(text).toContain('سمية')
    expect(text).toContain('أريد عرض سعر')
  })

  test('empty form is blocked by validation (nothing is sent)', async ({ page }) => {
    await page.goto('/')
    await captureWindowOpen(page)
    await page.locator('.contact__form button[type="submit"]').click()
    expect(await page.evaluate(() => window.__opened)).toHaveLength(0)
  })

  test('floating WhatsApp button links to the company number', async ({ page }) => {
    await page.goto('/')
    await expect(page.locator('.wa-fab')).toHaveAttribute('href', `https://wa.me/${shared.whatsapp}`)
  })

  test('phone, fax and email are shown', async ({ page }) => {
    await page.goto('/')
    const info = page.locator('.contact__info')
    await expect(info).toContainText(shared.phone)
    await expect(info).toContainText(shared.fax)
    await expect(info).toContainText(shared.email)
  })
})

test.describe('Mobile (390px)', () => {
  test.use({ viewport: { width: 390, height: 844 } })

  test('no horizontal scrolling', async ({ page }) => {
    await page.goto('/')
    const { scroll, client } = await page.evaluate(() => ({
      scroll: document.documentElement.scrollWidth,
      client: document.documentElement.clientWidth,
    }))
    expect(scroll).toBeLessThanOrEqual(client)
  })

  test('hamburger menu opens, and closes after choosing a link', async ({ page }) => {
    await page.goto('/')
    const nav = page.locator('.nav')
    await expect(nav).not.toHaveClass(/nav--open/)

    await page.locator('.menu-btn').click()
    await expect(nav).toHaveClass(/nav--open/)

    await nav.locator('a[href="#contact"]').click()
    await expect(nav).not.toHaveClass(/nav--open/)
  })
})
