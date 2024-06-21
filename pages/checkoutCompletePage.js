import BasePage from './basePage'
import fs from 'fs'
import * as productsPageObjects from '../pageobjects/productsPage'
import * as checkoutCompletePagePageObjects from '../pageobjects/checkoutCompletePage'

const testData = JSON.parse(fs.readFileSync(`./data/users.json`, `utf-8`))

class CheckoutCompletePage extends BasePage {
	constructor(page) {
		super(page)
	}

	async verifyLogoVisible() {
		return await this.isElementVisible(productsPageObjects.appLogo, testData.notVisibleText)
	}

	async verifyBurgerMenuButtonVisible() {
		return await this.isElementVisible(productsPageObjects.burgerMenuBtn, testData.notVisibleText)
	}

	async shoppingCartLinkVisible() {
		return await this.isElementVisible(
			productsPageObjects.shoppingCartLink,
			testData.notVisibleText
		)
	}

	async shoppingCartCount() {
		return await this.verifyElementText(
			productsPageObjects.shoppingCartLink,
			testData.cartCountEmpty
		)
	}

	async titleVisible() {
		return await this.isElementVisible(checkoutCompletePagePageObjects.title, testData.notVisibleText)
	}

	async completeHeaderVisible() {
		await this.isElementVisible(checkoutCompletePagePageObjects.completeHeader, testData.notVisibleText)
		return await this.verifyElementText(
			checkoutCompletePagePageObjects.completeHeader,
			testData.completeHeaderText
		)
	}

	async completeTextVisible() {
		await this.isElementVisible(checkoutCompletePagePageObjects.completeText, testData.notVisibleText)
		return await this.verifyElementText(
			checkoutCompletePagePageObjects.completeText,
			testData.completeOrderText
		)
	}

	async ponyExpressImageVisible() {
		return await this.isElementVisible(
			checkoutCompletePagePageObjects.ponyExpressImage,
			testData.notVisibleText
		)
	}

	async backHomeButtonISEnabled() {
		return await this.isElementEnabled(checkoutCompletePagePageObjects.backHomeButton, testData.notEnabledText)
	}

	async VerifySocialandFooterLinks() {
		await this.isElementVisible(productsPageObjects.facebookLink, testData.notVisibleText)
		await this.isElementVisible(productsPageObjects.twitterLink, testData.notVisibleText)
		await this.isElementVisible(productsPageObjects.linkedInLink, testData.notVisibleText)
		await this.isElementVisible(productsPageObjects.footerText, testData.notVisibleText)
	}

	async clickBackHomeButton() {
		return await this.waitAndClick(checkoutCompletePagePageObjects.backHomeButton, testData.notEnabledText)
	}
}
export default CheckoutCompletePage
