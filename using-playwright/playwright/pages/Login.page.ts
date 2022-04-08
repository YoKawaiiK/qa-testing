import { Page } from "playwright";

export default class LoginPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  public get emailTextField() {
    return this.page.$('input[name="email"]');
  }

  public get passwordTextField() {
    return this.page.$('input[name="password"]');
  }

  public get loginBtn() {
    return this.page.$("//button[text()='LOGIN']");
  }

  // methods
  public async enterUserName(name: string) {
    const emailTextField = await this.emailTextField;
    await emailTextField?.fill(name);
  }

  public async enterUserPassword(password: string) {
    const passwordTextField = await this.passwordTextField;
    await passwordTextField?.fill(password);
  }

  public async clickLoginBtn() {
    const loginBtn = await this.loginBtn;
    await loginBtn?.click();
  }

  // all in one
  public async login(name: string, password: string) {
    const emailTextField = await this.emailTextField;
    const passwordTextField = await this.passwordTextField;
    const loginBtn = await this.loginBtn;
    await emailTextField?.fill(name);
    await passwordTextField?.fill(password);
    await loginBtn?.click();
  }
}
