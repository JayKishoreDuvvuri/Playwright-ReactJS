import BasePage from './basePage'
import fs from 'fs'
import * as productsPagePageObjects from '../pageobjects/productsPage'
import * as yourCartPagePageObjects from '../pageobjects/yourCartPage'

const testData = JSON.parse(fs.readFileSync(`./data/users.json`, `utf-8`))

class YourCartPage extends BasePage {
	constructor(page) {
		super(page)
	}

	async verifyLogoVisible() {
		return await this.isElementVisible(productsPagePageObjects.appLogo)
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

	async titleVisible() {
		return await this.isElementVisible(yourCartPagePageObjects.title)
	}

	async quantityAndDescriptionLabelVisible() {
		await this.isElementVisible(yourCartPagePageObjects.cartQuantityLabel)
		return await this.isElementVisible(
			yourCartPagePageObjects.cartDescriptionLabel
		)
	}

	async cartQuantityVisible() {
		await this.isElementVisible(yourCartPagePageObjects.cartQuantity)
		return await this.verifyElementText(
			yourCartPagePageObjects.cartQuantity,
			testData.cartQuantity
		)
	}

	async itemNameVisible() {
		return await this.isElementVisible(productsPagePageObjects.fleeceJacketname)
	}

	async itemTextVisible() {
		return await this.isElementVisible(yourCartPagePageObjects.flecceJacketText)
	}

	async itemPriceVisible() {
		return await this.isElementVisible(
			yourCartPagePageObjects.fleeceJacketPrice
		)
	}

	async continueShoppingBtnIsEnabled() {
		return await this.isElementEnabled(
			yourCartPagePageObjects.continueShoppingButton
		)
	}

	async removeBtnIsEnabled() {
		return await this.isElementEnabled(yourCartPagePageObjects.removeButton)
	}

	async checkoutBtnIsEnabled() {
		return await this.isElementEnabled(yourCartPagePageObjects.checkoutButton)
	}

	async VerifySocialandFooterLinks() {
		await this.isElementVisible(productsPagePageObjects.facebookLink)
		await this.isElementVisible(productsPagePageObjects.twitterLink)
		await this.isElementVisible(productsPagePageObjects.linkedInLink)
		await this.isElementVisible(productsPagePageObjects.footerText)
	}

	async clickContinueShoppingBtn() {
		return await this.waitAndClick(
			yourCartPagePageObjects.continueShoppingButton
		)
	}

	async clickCheckoutBtn() {
		return await this.waitAndClick(yourCartPagePageObjects.checkoutButton)
	}

	async clickRemoveBtnForItems() {
		await this.waitAndClick(yourCartPagePageObjects.removeButton)
		return await this.waitAndClick(
			yourCartPagePageObjects.removeButtonTshirtRed
		)
	}

	async cartItemAndQuantityLabelNotVisible() {
		await this.isElementNotVisible(yourCartPagePageObjects.cartQuantityLabel)
		await this.isElementNotVisible(yourCartPagePageObjects.cartItemLabel)
	}
}
export default YourCartPage
