import BasePage from "./basePage";
import { baseUrl } from "../config";
import fs from "fs";
import * as loginPageObjects from "../pageobjects/loginPage";
import { errorMessage } from "../pageobjects/checkoutYourInformationPage";

const testData = JSON.parse(fs.readFileSync(`./data/users.json`, `utf-8`));

class LoginPage extends BasePage {
  constructor(page) {
    super(page);
  }

  async openApp() {
    await super.open(baseUrl);
    return await super.waitForPageLoad();
  }

  async loginPageLogo() {
    return await this.isElementVisible(
      loginPageObjects.loginPageLogo,
      testData.notVisibleText
    );
  }

  async usernameFieldVisible() {
    return await this.isElementVisible(
      loginPageObjects.username,
      testData.notVisibleText
    );
  }

  async passwordFieldVisible() {
    return await this.isElementVisible(
      loginPageObjects.password,
      testData.notVisibleText
    );
  }

  async loginButtonIsEnabled() {
    return await this.isElementEnabled(
      loginPageObjects.loginButton,
      testData.notEnabledText
    );
  }

  async loginCredentialsVisible() {
    return await this.isElementEnabled(
      loginPageObjects.loginCredentials,
      testData.notVisibleText
    );
  }

  async passwordCredentialsVisible() {
    return await this.isElementEnabled(
      loginPageObjects.loginPasswordCredentials,
      testData.notVisibleText
    );
  }

  async loginAsStandardUser() {
    await this.waitAndFill(loginPageObjects.username, testData.standard_user);
    await this.waitAndFill(loginPageObjects.password, testData.password);
    await this.waitAndClick(loginPageObjects.loginButton);
  }
}
export default LoginPage;
