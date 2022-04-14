import { Browser, BrowserContext, chromium, Page } from "playwright";

describe("Handling different types of inputs", () => {
  let browser: Browser;
  let ctx: BrowserContext;
  let page: Page;
  beforeAll(async () => {
    browser = await chromium.launch({ headless: false });
    ctx = await browser.newContext();
    page = await ctx.newPage();
    await page.goto("https://letcode.in/edit");
  });

  afterAll(async () => {
    await page.close();
    await ctx.close();
    await browser.close();
  });

  test("Typing text to element", async () => {
    const fullName = page.locator("#fullName");
    await fullName?.type("Danil Shubin");
  });

  test("Using locator to get element", async () => {
    const join = page.locator("#join");
    await join?.focus();
    await page.keyboard.press("End");
    await join?.fill("I am a good person");
  });

  test("Text inside input", async () => {
    const getMeText = await page.getAttribute("id=getMe", "value");
    console.log(getMeText);
  });

  test("Clear text", async () => {
    const clearMe = page.locator("input#clearMe");
    await clearMe.fill("");
  });
});
