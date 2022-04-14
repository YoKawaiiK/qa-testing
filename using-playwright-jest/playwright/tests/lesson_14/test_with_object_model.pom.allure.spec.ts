import UrlTestConstants from "../../constants/url_constants";
import CommonFunctions from "../../pages/Common.page";
import HeaderPage from "../../pages/Header.page";
import LoginPage from "../../pages/Login.page";

import * as loginCredential from "../../data/login_credential.json";
import { Page } from "playwright";

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

  

});
