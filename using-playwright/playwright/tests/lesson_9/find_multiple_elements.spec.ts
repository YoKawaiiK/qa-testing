import { Browser, BrowserContext, chromium, Page } from "playwright";

describe("Find multiple elements", () => {
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

  test("Case 1: Enter git username", async () => {
    const username = await page.$('input[name="username"]');
    await username?.fill("YoKawaiiK");
    await username?.press("Enter");
  });

  test("Case 2: Print all the repos", async () => {
    await page.waitForSelector("app-gitrepos ol li");
    const repos = await page.$$("app-gitrepos ol li");

    const reposUrl = await Promise.all(
      repos.map(async (repo, i) => {
        return await repo.innerText();
      })
    );

    console.log(reposUrl);
  });
});
