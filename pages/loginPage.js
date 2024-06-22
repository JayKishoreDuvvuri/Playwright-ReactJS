import BasePage from './basePage'
import fs from 'fs'
import * as loginPageObjects from '../pageobjects/loginPage'
import { errorMessage } from '../pageobjects/checkoutYourInformationPage'

const testData = JSON.parse(fs.readFileSync(`./data/users.json`, `utf-8`))

class LoginPage extends BasePage {
	constructor(page) {
		super(page)
	}

	async openApp() {
		await super.open()
		return await super.waitForPageLoad()
	}

	async loginPageLogo() {
		return await this.isElementVisible(loginPageObjects.loginPageLogo)
	}

	async loginAsStandardUser() {
		await this.waitAndFill(loginPageObjects.username, testData.standard_user)
		await this.waitAndFill(loginPageObjects.password, testData.password)
		await this.waitAndClick(loginPageObjects.loginButton)
	}
}
export default LoginPage
