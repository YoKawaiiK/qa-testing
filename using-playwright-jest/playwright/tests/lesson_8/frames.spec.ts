import { Browser, BrowserContext, chromium, Page } from "playwright";

describe("Work with frames", () => {
  let browser: Browser;
  let ctx: BrowserContext;
  let page: Page;
  beforeAll(async () => {
    browser = await chromium.launch({ headless: false });
    ctx = await browser.newContext();
    page = await ctx.newPage();
    await page.goto("https://letcode.in/frame", { timeout: 0 });
  });

  afterAll(async () => {
    await page.close();
    await ctx.close();
    await browser.close();
  });

  test("Case 1: fill fields in frame", async () => {
    const firstFrame = page.frame({
      name: "firstFr",
    });

    if (firstFrame != null) {
      await firstFrame.fill('input[name="fname"]', "Danil");
      await firstFrame.fill('input[name="lname"]', "Shubin");
    } else throw new Error("No such frame");
  });

  test("Case 2: fill fields in frame nested in another frame", async () => {
    const firstFrame = page.frame({
      name: "firstFr",
    });
    if (firstFrame == null) throw new Error("No such frame");

    const nestedFrame = firstFrame.childFrames()[0];
    if (nestedFrame == null) throw new Error("No such frame");
    await nestedFrame.fill('input[name="email"]', "mahoromatic.chan@gmail.com");
  });

  test("Case 3: fill fields in parent frame across child frame", async () => {
    const firstFrame = page.frame({
      name: "firstFr",
    });
    if (firstFrame == null) throw new Error("No such frame");

    if (firstFrame.childFrames()[0] == null) throw new Error("No such frame");
    const parentFrame = firstFrame.childFrames()[0].parentFrame();

    await parentFrame?.fill('input[name="fname"]', "Danil");
    await parentFrame?.fill('input[name="lname"]', "Shubin");
  });
});
