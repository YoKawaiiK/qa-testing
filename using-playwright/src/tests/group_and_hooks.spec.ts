import { expect, Page, test } from "@playwright/test";

import ConstantsCredential from "../constants/credential";
test.describe("Group for tests", () => {
  let page: Page;

  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
    await page.goto("https://letcode.in");
  });

  test("Open letcode and expect", async () => {
    const title = await page.title();
    expect(title).toBe("LetCode with Koushik");
  });

  test("Open letcode and login", async () => {
    const title = await page.title();
    expect(title).toBe("LetCode with Koushik");

    await Promise.all([
      page.waitForNavigation(),
      page.click("text=/.*Log in*./"),
    ]);

    await page.click("input[name='email']");
    await page.fill("input[name='email']", ConstantsCredential.email);

    await page.click("input[name='password']");
    await page.fill("input[name='password']", ConstantsCredential.password);

    await Promise.all([
        page.waitForNavigation(),
        page.click("//button[text()='LOGIN']"),
      ]);

      expect(page.url()).toContain("https://letcode.in")
  });
});
