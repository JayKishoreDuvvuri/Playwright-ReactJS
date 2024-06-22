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
		return await this.isElementVisible(productsPageObjects.appLogo)
	}

	async verifyBurgerMenuButtonVisible() {
		return await this.isElementVisible(productsPageObjects.burgerMenuBtn)
	}

	async shoppingCartLinkVisible() {
		return await this.isElementVisible(productsPageObjects.shoppingCartLink)
	}

	async shoppingCartCount() {
		return await this.verifyElementText(
			productsPageObjects.shoppingCartLink,
			testData.cartCountEmpty
		)
	}

	async titleVisible() {
		return await this.isElementVisible(checkoutCompletePagePageObjects.title)
	}

	async completeHeaderVisible() {
		await this.isElementVisible(checkoutCompletePagePageObjects.completeHeader)
		return await this.verifyElementText(
			checkoutCompletePagePageObjects.completeHeader,
			testData.completeHeaderText
		)
	}

	async completeTextVisible() {
		await this.isElementVisible(checkoutCompletePagePageObjects.completeText)
		return await this.verifyElementText(
			checkoutCompletePagePageObjects.completeText,
			testData.completeOrderText
		)
	}

	async ponyExpressImageVisible() {
		return await this.isElementVisible(
			checkoutCompletePagePageObjects.ponyExpressImage
		)
	}

	async backHomeButtonISEnabled() {
		return await this.isElementEnabled(
			checkoutCompletePagePageObjects.backHomeButton
		)
	}

	async VerifySocialandFooterLinks() {
		await this.isElementVisible(productsPageObjects.facebookLink)
		await this.isElementVisible(productsPageObjects.twitterLink)
		await this.isElementVisible(productsPageObjects.linkedInLink)
		await this.isElementVisible(productsPageObjects.footerText)
	}

	async clickBackHomeButton() {
		return await this.waitAndClick(
			checkoutCompletePagePageObjects.backHomeButton
		)
	}
}
export default CheckoutCompletePage
