
import {Page} from "@playwright/test"

export default class CommonFunctions {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // locators
  toast = async () => await this.page.waitForSelector("div[role='alertdialog']");


  
}
