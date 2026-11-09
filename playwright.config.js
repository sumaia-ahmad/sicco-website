import { defineConfig } from '@playwright/test'

// Tests run against the real production build (not the dev server), on a
// separate port so they never clash with `npm run dev`.
const PORT = 3100

export default defineConfig({
  testDir: './tests',
  timeout: 30_000,
  fullyParallel: true,
  reporter: [['list'], ['html', { open: 'never' }]],
  use: {
    baseURL: `http://localhost:${PORT}`,
    // Use the locally installed Google Chrome — no extra browser download.
    channel: 'chrome',
    viewport: { width: 1440, height: 900 },
    trace: 'retain-on-failure',
  },
  webServer: {
    command: `npm run build && npm run start -- -p ${PORT}`,
    url: `http://localhost:${PORT}`,
    timeout: 300_000,
    reuseExistingServer: !process.env.CI,
  },
})
