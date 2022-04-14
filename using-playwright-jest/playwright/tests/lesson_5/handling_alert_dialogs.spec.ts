import { Browser, BrowserContext, chromium, Page, firefox } from "playwright";

describe("Handling different types dialogs", () => {
  let browser: Browser;
  let ctx: BrowserContext;
  let page: Page;
  beforeAll(async () => {
    browser = await chromium.launch({ headless: false });
    ctx = await browser.newContext();
    page = await ctx.newPage();
    await page.goto("https://letcode.in/alert");
  });

  afterAll(async () => {
    await page.close();
    await ctx.close();
    await browser.close();
  });

  test("Case #1: prompt dialog", async () => {
    const promptDialog = await page.$("#prompt");

    page.on("dialog", (dialog) => {
      console.log("Message: ", dialog.message());
      console.log("Message: ", dialog.defaultValue());
      dialog.accept();
    });
    await promptDialog?.click();
  });

  test("Case #2: sweet alert", async () => {
    const sweetDialogButton = page.locator("#modern");

    await sweetDialogButton.click();

    const textContent = await page
      .locator(".card-content .title")
      .textContent();

    console.log(textContent);

    await page.click(".modal-close");
  });
});
