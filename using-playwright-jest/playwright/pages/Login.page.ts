import { Locator, Page } from "playwright";

export default class LoginPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  emailTextField = async () => await this.page.$('input[name="email"]');

  passwordTextField = async () => await this.page.$('input[name="password"]');

  loginBtn = async () => await this.page.$("//button[text()='LOGIN']");

  // methods
  public async enterUserName(name: string) {
    const emailTextField = await this.emailTextField();
    if (emailTextField == null) throw new Error("No emailTextField");
    await emailTextField.fill(name);
  }

  public async enterUserPassword(password: string) {
    const passwordTextField = await this.passwordTextField();
    if (passwordTextField == null) throw new Error("No passwordTextField");
    await passwordTextField.fill(password);
  }

  public async clickLoginBtn() {
    const loginBtn = await this.loginBtn();
    if (loginBtn == null) throw new Error("No loginBtn");

    await loginBtn?.click();
  }

  // all in one
  public async login(name: string, password: string) {
    const emailTextField = await this.emailTextField();
    const passwordTextField = await this.passwordTextField();
    const loginBtn = await this.loginBtn();
    await emailTextField?.fill(name);
    await passwordTextField?.fill(password);
    await loginBtn?.click();
  }
}
