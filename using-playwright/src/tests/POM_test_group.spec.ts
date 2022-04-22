import test, { expect, Page } from "@playwright/test";
import CommonFunctions from "../pages/CommonPage";
import HeaderPage from "../pages/HeaderPage";
import LoginPage from "../pages/LoginPage";

import ConstantsUrls from "../constants/urls";
import ConstantsCredential from "../constants/credential";

test.describe("POM test group disadvantages", async () => {
  let page: Page;
  let header: HeaderPage;
  let login: LoginPage;
  let common: CommonFunctions;

  test.beforeEach(async ({ browser }) => {
    page = await browser.newPage();
    await page.goto(ConstantsUrls.baseUrl);
    header = new HeaderPage(page);
    login = new LoginPage(page);
    common = new CommonFunctions(page);
  });

  test("TC001: go to website and login", async () => {
    await header.clickLoginLink();
    expect(page.url()).toBe(ConstantsUrls.loginUrl);

    await login.login(ConstantsCredential.email, ConstantsCredential.password);
    await login.clickLoginBtn();

    const toast = await common.toast();
    expect(await toast.textContent()).toContain("Welcome");

    await header.clickSignOutLink();
    expect(page.url()).toBe(ConstantsUrls.baseUrl);
  });

  test("TC002: go to website and login (again, but other methods)", async () => {
    await header.clickLoginLink();
    expect(page.url()).toBe(ConstantsUrls.loginUrl);

    await login.enterUserName(ConstantsCredential.email);
    await login.enterUserPassword(ConstantsCredential.password);
    await login.clickLoginBtn();

    const toast = await common.toast();

    expect(await toast.textContent()).toContain("Welcome");
  });
});
