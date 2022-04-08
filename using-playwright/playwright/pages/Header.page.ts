import { Page } from "playwright";

export default class HeaderPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Locators
  public get loginBtn() {
    const loginButton = this.page.$('text="Log in"');
    if (loginButton == null) throw new Error("No element login Button");
    return loginButton;
  }

  public get signOutBtn() {
    const signOutButton = this.page.$('text="Sign Out"');
    if (signOutButton == null) throw new Error("No element login Button");
    return signOutButton;
  }

  public async clickLoginLink() {
    const loginBtn = await this.loginBtn;
    await loginBtn?.click();
  }

  public async clickSignOutLink() {
    const signOutBtn = await this.signOutBtn;
    await signOutBtn?.click();
  }
}
