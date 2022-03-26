import { chromium } from "playwright";

describe("Upload files", () => {
  const filePath0 = "./playwright/videos/a.webm";
  const filePath1 = "./playwright/videos/b.webm";
  

  xtest("Case: using input", async () => {
    const browser = await chromium.launch({ headless: false });
    const ctx = await browser.newContext();
    const page = await ctx.newPage();

    await page.goto("https://www.sendgb.com/");
    page.locator(".btn.btn-xl.cookiebutton").click();

    await page.setInputFiles('input[name="qqfile"]', [filePath0, filePath1]);

    browser.close();
  });

  test("Case: upload using function (drag and drop)", async () => {
    const browser = await chromium.launch({ headless: false });
    const ctx = await browser.newContext();
    const page = await ctx.newPage();

    await page.goto("https://the-internet.herokuapp.com/upload");



    page.on("filechooser", async (fileChooser) => {
      await fileChooser.setFiles([filePath0, filePath1]);
    });

    await page.click(".example + div#drag-drop-upload", { force: true });
    

    // browser.close();
  });
});
