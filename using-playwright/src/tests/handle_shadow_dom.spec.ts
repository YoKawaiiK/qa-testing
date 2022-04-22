import { test, expect, Page } from "@playwright/test";

test.describe("Case 3: Handle shadow DOM", () => {
  let page: Page;

  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
  });

  test.beforeEach(async () => {
    await page.goto("https://letcode.in/shadow");
  });

  test("TC1: Test simple fill name", async () => {
    await page.fill("#fname", "Danil");
  });

  test("TC2", async () => {
    await page.goto("https://bugs.chromium.org/p/chromium/issues/list");

    const canElement = await page.$("#can");
    if (canElement == null) throw new Error("canElement did not find");
    await canElement.selectOption({
      value: "7",
    });

    await page.fill("#searchq", "some bug");

    await page.waitForTimeout(3000);
  });
});
