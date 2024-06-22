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
		return await this.isElementVisible(productsPagePageObjects.appLogo)
	}

	async titleVisible() {
		return await this.isElementVisible(
			checkoutYourInformationPagePageObjects.title
		)
	}

	async verifyBurgerMenuButtonVisible() {
		return await this.isElementVisible(productsPagePageObjects.burgerMenuBtn)
	}

	async shoppingCartLinkVisible() {
		return await this.isElementVisible(productsPagePageObjects.shoppingCartLink)
	}

	async shoppingCartCount() {
		return await this.verifyElementText(
			productsPagePageObjects.shoppingCartLink,
			testData.shoppingCartCount
		)
	}

	async verifyErrorMessage() {
		return await this.isElementVisible(
			checkoutYourInformationPagePageObjects.errorMessage
		)
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
		return await this.waitAndFill(
			checkoutYourInformationPagePageObjects.firstName,
			firstNameText
		)
	}

	async typeLastName() {
		const lastNameText = await this.getRandomName()
		return await this.waitAndFill(
			checkoutYourInformationPagePageObjects.lastName,
			lastNameText
		)
	}

	async typePostalCode() {
		const postalCodeText = await this.getRandomName()
		return await this.waitAndFill(
			checkoutYourInformationPagePageObjects.postalCode,
			postalCodeText
		)
	}

	async cancelBtnIsEnabled() {
		return await this.isElementEnabled(
			checkoutYourInformationPagePageObjects.cancelButton
		)
	}

	async clickCancelBtn() {
		return await this.waitAndClick(
			checkoutYourInformationPagePageObjects.cancelButton
		)
	}

	async continueBtnIsEnabled() {
		return await this.isElementEnabled(
			checkoutYourInformationPagePageObjects.continueButton
		)
	}

	async VerifySocialandFooterLinks() {
		await this.isElementVisible(productsPagePageObjects.facebookLink)
		await this.isElementVisible(productsPagePageObjects.twitterLink)
		await this.isElementVisible(productsPagePageObjects.linkedInLink)
		await this.isElementVisible(productsPagePageObjects.footerText)
	}

	async clickContinueBtn() {
		return await this.waitAndClick(
			checkoutYourInformationPagePageObjects.continueButton
		)
	}
}
export default CheckoutYourInformationPage
