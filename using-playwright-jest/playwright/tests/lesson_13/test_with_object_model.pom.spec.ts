import UrlTestConstants from "../../constants/url_constants";
import CommonFunctions from "../../pages/Common.page";
import HeaderPage from "../../pages/Header.page";
import LoginPage from "../../pages/Login.page";

import * as loginCredential from "../../data/login_credential.json";
import { BrowserContext, Page } from "playwright";

declare const page: Page;

describe("TC001: testing with POM", () => {
  // pages
  let headerPage: HeaderPage;
  let loginPage: LoginPage;
  let commonFunctions: CommonFunctions;

  beforeAll(async () => {
    await page.goto(UrlTestConstants.baseUrl);
    headerPage = new HeaderPage(page);
    loginPage = new LoginPage(page);
    commonFunctions = new CommonFunctions(page);
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
