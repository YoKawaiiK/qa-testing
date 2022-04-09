import { Browser, BrowserContext, chromium, firefox, Page } from "playwright";
import UrlTestConstants from "../../constants/url_constants";
import CommonFunctions from "../../pages/Common.page";
import HeaderPage from "../../pages/Header.page";
import LoginPage from "../../pages/Login.page";

import * as loginCredential from "../../data/login_credential.json";

describe("TC001: testing with POM", () => {
  let browser: Browser;
  let ctx: BrowserContext;
  let page: Page;

  // pages
  let headerPage: HeaderPage;
  let loginPage: LoginPage;
  let commonFunctions: CommonFunctions;

  beforeAll(async () => {
    browser = await chromium.launch({
      headless: false,
    });
    ctx = await browser.newContext();
    page = await ctx.newPage();
    await page.goto(UrlTestConstants.baseUrl);
    headerPage = new HeaderPage(page);
    loginPage = new LoginPage(page);
    commonFunctions = new CommonFunctions(page);
  });

  afterAll(async () => {
    await page.close();
    await ctx.close();
    await browser.close();
  });

  test("Case #1: login positive", async () => {
    expect(page.url()).toBe(UrlTestConstants.baseUrl);
    await headerPage.clickLoginLink();
    expect(page.url()).toBe(UrlTestConstants.loginUrl);
    await loginPage.enterUserName(loginCredential.email);
    await loginPage.enterUserPassword(loginCredential.password);
    await loginPage.clickLoginBtn();

    const toast = await commonFunctions.toast();

    expect(await toast?.textContent()).toContain("Welcome");
    await headerPage.clickSignOutLink();
    expect(page.url()).toBe(UrlTestConstants.baseUrl);
  });

  test("Case #2: login positive again, short test body", async () => {
    await loginPage.login(loginCredential.email, loginCredential.password);
    expect(page.url()).toBe(UrlTestConstants.baseUrl);
  });
});
