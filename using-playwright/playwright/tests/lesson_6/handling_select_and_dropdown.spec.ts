import { Browser, BrowserContext, chromium, Page } from "playwright";

describe("Handling select and dropdown", () => {
  let browser: Browser;
  let ctx: BrowserContext;
  let page: Page;
  beforeAll(async () => {
    browser = await chromium.launch({ headless: false });
    ctx = await browser.newContext();
    page = await ctx.newPage();
    await page.goto("https://letcode.in/dropdowns");
  });

  // afterAll(async () => {
  //   await page.close();
  //   await ctx.close();
  //   await browser.close();
  // });

  test("Case #1: Select a dropdown based on value", async () => {
    const fruits = await page.$("#fruits");

    await fruits?.selectOption("2");

    const msg = await page.$("div.notification.is-success");

    if (msg) expect(await msg.textContent()).toContain("Orange");

    await fruits?.selectOption("3");
    if (msg) expect(await msg.textContent()).not.toContain("Orange");
  });

  test("Case #2: Select multiple", async () => {
    const superheros = await page.$("#superheros");

    const values = await superheros?.selectOption([
      { label: "Aquaman" },
      { value: "bt" },
      { index: 8 },
    ]);

    console.log(values);
  });

  test("Count of the select", async () => {
    const lang = await page.$$("#lang option");

    console.log(lang.length);
  });

  test("Get selected text", async () => {
    const lang = await page.selectOption("#country", "India");

    const countryText = await page.$eval<string, HTMLSelectElement>(
      "#country",
      (element) => element.value
    );

    console.log(countryText);
    expect(countryText).toEqual("India");
  });
});
