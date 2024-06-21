import BasePage from './basePage'
import fs from 'fs'
import * as productsPagePageObjects from '../pageobjects/productsPage'
import * as checkoutYourInformationPagePageObjects from '../pageobjects/checkoutYourInformationPage'


const testData = JSON.parse(fs.readFileSync(`./data/users.json`, `utf-8`))

class CheckoutYourInformationPage extends BasePage {
	constructor(page) {
		super(page)
	}

	async verifyLogoVisible() {
		return await this.isElementVisible(productsPagePageObjects.appLogo, testData.notVisibleText)
	}

	async titleVisible() {
		return await this.isElementVisible(checkoutYourInformationPagePageObjects.title, testData.notVisibleText)
	}

	async verifyBurgerMenuButtonVisible() {
		return await this.isElementVisible(productsPagePageObjects.burgerMenuBtn, testData.notVisibleText)
	}

	async shoppingCartLinkVisible() {
		return await this.isElementVisible(
			productsPagePageObjects.shoppingCartLink,
			testData.notVisibleText
		)
	}

	async shoppingCartCount() {
		return await this.verifyElementText(
			productsPagePageObjects.shoppingCartLink,
			testData.shoppingCartCount
		)
	}

	async verifyErrorMessage() {
		return await this.isElementVisible(checkoutYourInformationPagePageObjects.errorMessage, testData.notVisibleText)
	}

	async VerifyTextFirstNameOfErrorMessage() {
		return await this.verifyElementText(
			checkoutYourInformationPagePageObjects.errorMessage,
			testData.errorMessageFirstName
		)
	}

	async VerifyTextLastNameOfErrorMessage() {
		return await this.verifyElementText(
			errorMessage,
			testData.errorMessageLasttName
		)
	}

	async VerifyTextPostalCodeOfErrorMessage() {
		return await this.verifyElementText(
			errorMessage,
			testData.errorMessagePostalCode
		)
	}

	async getRandomName() {
		let randomNumber = Math.floor(Math.random() * 100) + 1
		return `name${new Date().getTime().toString()}${randomNumber}`
	}

	async typeFirstName() {
		const firstNameText = await this.getRandomName()
		return await this.waitAndFill(checkoutYourInformationPagePageObjects.firstName, firstNameText)
	}

	async typeLastName() {
		const lastNameText = await this.getRandomName()
		return await this.waitAndFill(checkoutYourInformationPagePageObjects.lastName, lastNameText)
	}

	async typePostalCode() {
		const postalCodeText = await this.getRandomName()
		return await this.waitAndFill(checkoutYourInformationPagePageObjects.postalCode, postalCodeText)
	}

	async cancelBtnIsEnabled() {
		return await this.isElementEnabled(checkoutYourInformationPagePageObjects.cancelButton, testData.notEnabledText)
	}

	async clickCancelBtn() {
		return await this.waitAndClick(checkoutYourInformationPagePageObjects.cancelButton)
	}

	async continueBtnIsEnabled() {
		return await this.isElementEnabled(checkoutYourInformationPagePageObjects.continueButton, testData.notEnabledText)
	}

	async VerifySocialandFooterLinks() {
		await this.isElementVisible(productsPagePageObjects.facebookLink, testData.notVisibleText)
		await this.isElementVisible(productsPagePageObjects.twitterLink, testData.notVisibleText)
		await this.isElementVisible(productsPagePageObjects.linkedInLink, testData.notVisibleText)
		await this.isElementVisible(productsPagePageObjects.footerText, testData.notVisibleText)
	}

	async clickContinueBtn() {
		return await this.waitAndClick(checkoutYourInformationPagePageObjects.continueButton, testData.notEnabledText)
	}
}
export default CheckoutYourInformationPage
