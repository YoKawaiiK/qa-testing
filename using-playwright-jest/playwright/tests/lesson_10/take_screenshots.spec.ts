import { Browser, BrowserContext, chromium, Page } from "playwright";

describe("How to take screenshots", () => {
  const screenshotsPath = "./playwright/tests/lesson_10/screenshots/";

  let browser: Browser;
  let ctx: BrowserContext;
  let page: Page;
  beforeAll(async () => {
    browser = await chromium.launch({ headless: false });
    ctx = await browser.newContext();
    page = await ctx.newPage();
    await page.goto("https://letcode.in/elements");
  });

  afterAll(async () => {
    await page.close();
    await ctx.close();
    await browser.close();
  });

  afterEach(async () => {
    await page.screenshot({
      path: `${screenshotsPath}${Date.now()}-short.png`,
    });
  });

  test("Case 1: Take full screenshot", async (el) => {
    const username = await page.$('input[name="username"]');
    await username?.fill("YoKawaiiK");
    await username?.press("Enter");
    await page.waitForSelector("app-gitrepos ol li");
    await page.screenshot({
      path: `${screenshotsPath}${Date.now()}-full.png`,
      fullPage: true,
    });
  });

  test("Case 2: Take element screenshot", async () => {
    const cardContent = await page.$(".card-content");
    await cardContent?.screenshot({
      path: `${screenshotsPath}${Date.now()}-element.png`,
    });
  });
});
