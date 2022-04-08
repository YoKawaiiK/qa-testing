import { Page } from "playwright";

export default class CommonFunctions {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // locators
  public get toast() {
    return this.page.waitForSelector("div[role='alertdialog']");
  }

  // methods

  // public async verifyToastMessage() {

  // }
}
