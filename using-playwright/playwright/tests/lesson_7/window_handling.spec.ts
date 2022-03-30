import { Browser, BrowserContext, chromium, Page } from "playwright";

describe("Window handling", () => {
  let browser: Browser;
  let ctx: BrowserContext;
  let page: Page;
  beforeAll(async () => {
    browser = await chromium.launch({ headless: false });
    ctx = await browser.newContext();
    page = await ctx.newPage();
    await page.goto("https://letcode.in/windows", { timeout: 0 });
  });

  //   afterAll(async () => {
  //     await page.close();
  //     await ctx.close();
  //     await browser.close();
  //   });

  xtest("Case #1: Single page handling", async () => {
    const [newWindow] = await Promise.all([
      ctx.waitForEvent("page"),
      await page.click("#home"),
    ]);

    await newWindow.waitForLoadState();
    expect(newWindow.url()).toContain("test");

    await newWindow.waitForURL("**/test");
    await newWindow.click("'Log in'");
    expect(newWindow.url()).toContain("signin");

    await page.bringToFront();
    await page.click('"Product"');
  });

  test("Case #1: Multiple handling", async () => {
    const [multipage] = await Promise.all([
      ctx.waitForEvent("page"),
      await page.click("#multi"),
    ]);

    await multipage.waitForLoadState();
    const pages = multipage.context().pages();

    console.log(pages.length);
    pages.forEach((page) => {
      console.log(page.url());
    });

    await pages[1].bringToFront();
    const promptDialog = await pages[1].$("#prompt");

    pages[1].on("dialog", (dialog) => {
      console.log("Message: ", dialog.message());
      dialog.accept();
    });

    await promptDialog?.click();
  });
});
