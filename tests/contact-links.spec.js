// Unit tests for the contact-link helpers (no browser needed).
import { test, expect } from '@playwright/test'
import { buildMessage, whatsappUrl, mailtoUrl } from '../app/lib/contactLinks.js'

const labels = { name: 'الاسم', email: 'البريد الإلكتروني', message: 'رسالتك' }

test.describe('Contact links (unit)', () => {
  test('buildMessage puts each field on its own labelled line and trims spaces', () => {
    const text = buildMessage(labels, {
      name: '  سمية  ',
      email: ' test@example.com ',
      message: ' مرحبا ',
    })
    expect(text).toBe('الاسم: سمية\nالبريد الإلكتروني: test@example.com\nرسالتك: مرحبا')
  })

  test('whatsappUrl targets wa.me and URL-encodes Arabic text and new lines', () => {
    const url = whatsappUrl('963900000000', 'مرحبا\nسطر ثاني')
    expect(url.startsWith('https://wa.me/963900000000?text=')).toBe(true)
    expect(url).not.toContain('\n')
    expect(decodeURIComponent(url.split('text=')[1])).toBe('مرحبا\nسطر ثاني')
  })

  test('mailtoUrl encodes subject and body', () => {
    const url = mailtoUrl('info@sicco-sy.com', 'رسالة من الموقع', 'نص & رموز ?')
    expect(url.startsWith('mailto:info@sicco-sy.com?subject=')).toBe(true)
    const params = new URLSearchParams(url.split('?')[1])
    expect(params.get('subject')).toBe('رسالة من الموقع')
    expect(params.get('body')).toBe('نص & رموز ?')
  })
})
