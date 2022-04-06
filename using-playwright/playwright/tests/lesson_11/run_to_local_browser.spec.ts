import { Browser, BrowserContext, chromium, firefox, Page } from "playwright";

describe("How to run in local browser", () => {
  let browser: Browser;
  let ctx: BrowserContext;
  let page: Page;
  beforeAll(async () => {
    browser = await firefox.launch({ headless: false });
    // = await chromium.launch({
    //   headless: false,
    //   // to use local browser.
    //   channel: "chrome",
    //   // also may using executablePath to point at browser.exe
    // });

    ctx = await browser.newContext();
    page = await ctx.newPage();
    await page.goto("https://letcode.in/elements");
  });

  //   afterAll(async () => {
  //     await page.close();
  //     await ctx.close();
  //     await browser.close();
  //   });

  test("Case 1: just run browser", async (el) => {});
});
