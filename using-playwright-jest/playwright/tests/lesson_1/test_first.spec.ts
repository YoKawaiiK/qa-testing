import "@playwright/test";

import { chromium } from "playwright";


describe("Launch browser", () => {

  test('Open google', async () => {
    const browser = await chromium.launch({headless: false, slowMo: 1000})
    const context = await browser.newContext()
    const page = await context.newPage();
    await page.goto('https://google.com')
    await browser.close()
  })
})