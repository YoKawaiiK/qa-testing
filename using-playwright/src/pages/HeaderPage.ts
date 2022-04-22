import { Page } from "@playwright/test";

export default class HeaderPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Locators
  private loginBtn = async () => {
    const element = await this.page.$('text="Log in"');
    if (element == null) throw new Error("No element Log in Button");
    return element;
  };
  private signOutBtn = async () => {
    // const element = await this.page.$('text="Sign out"');
    const element = await this.page.$('//a[text()="Sign out"]');
    if (element == null) throw new Error("No element Sign out Button");
    return element;
  };

  public async clickLoginLink() {
    const loginBtn = await this.loginBtn();
    await Promise.all([
      this.page.waitForNavigation(),
      await loginBtn?.click({ force: true }),
    ]);
  }

  public async clickSignOutLink() {
    const signOutBtn = await this.signOutBtn();

    await signOutBtn?.click({ force: true });
  }
}
