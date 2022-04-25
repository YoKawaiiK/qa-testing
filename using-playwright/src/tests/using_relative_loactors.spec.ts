import { test, expect, Page } from "@playwright/test";

import "../constants/urls";
test.describe("Case 5: Using relative locators", () => {
  let page: Page;

  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
  });

  test("TC1: Signin into GitHub", async () => {
    await page.goto("https://github.com/login");
    await page.fill(
      "input:below(:text('Username or email address'))",
      "YoKawaiiK"
    );
    await page.fill("#password:above(:text('Sign in'))", "password");

    await page.click("a:near(:text('Password'))");

    expect(page.url()).toBe("https://github.com/password_reset");
  });

  test("TC2: Signin into GitHub", async () => {
    await page.goto("https://github.com/login");
    await page.pause() // for head mode
    await page.fill(
      "input:below(:text('Username or')):below(:text('Password'))",
      "Password"
    );

    await page.waitForTimeout(5000);
  });
});
