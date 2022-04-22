import { test, expect, Page } from "@playwright/test";

test.describe("Case 4: Visual comparisons", () => {
  let page: Page;

  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
  });

  test("TC1: positive", async () => {
    await page.goto("https://playwright.dev/");
    expect(await page.screenshot({ fullPage: true })).toMatchSnapshot(
      "static-content.png"
    );
  });

  test("TC2: negative comparison, because will be changes", async () => {
    await page.goto("https://www.coolgenerator.com/random-phrase-generator");
    expect(
      await page.screenshot({
        fullPage: true,
      })
    ).not.toMatchSnapshot("random-phrases.png", { threshold: 0.2 });
  });
});
