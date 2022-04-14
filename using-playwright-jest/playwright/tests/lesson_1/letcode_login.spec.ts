import { chromium } from "playwright"

import * as constants from "./constants";

describe("Letcode visit", ()=> {
    test("Open Letcode", async ()=> {
        const browser = await chromium.launch({headless: false})

        const context = await browser.newContext();
        const page = await context.newPage();
        await page.goto("https://letcode.in/");

        await page.locator("text='Log in'").click()
        // await page.click("text=Log in")
        await page.fill("input[name='email']", constants.EMAIL)
        await page.fill("input[name='password']", constants.PASSWORD)
        await page.locator('button:text("LOGIN")').click()
        await page.locator("#toast-container").click()
        await page.locator("text='Sign out'").click()
        await browser.close()
        
  
    })
})