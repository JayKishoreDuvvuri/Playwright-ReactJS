import BasePage from './basePage'
import fs from 'fs'
import * as productsPagePageObjects from "../pageobjects/productsPage";
import * as yourCartPagePageObjects from "../pageobjects/yourCartPage";

const testData = JSON.parse(fs.readFileSync(`./data/users.json`, `utf-8`))

class YourCartPage extends BasePage {
	constructor(page) {
		super(page)
	}

	async verifyLogoVisible() {
		return await this.isElementVisible(productsPagePageObjects.appLogo, testData.notVisibleText)
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

	async titleVisible() {
		return await this.isElementVisible(yourCartPagePageObjects.title, testData.notVisibleText)
	}

	async quantityAndDescriptionLabelVisible() {
		await this.isElementVisible(yourCartPagePageObjects.cartQuantityLabel, testData.notVisibleText)
		return await this.isElementVisible(
			yourCartPagePageObjects.cartDescriptionLabel,
			testData.notVisibleText
		)
	}

	async cartQuantityVisible() {
		await this.isElementVisible(yourCartPagePageObjects.cartQuantity, testData.notVisibleText)
		return await this.verifyElementText(yourCartPagePageObjects.cartQuantity, testData.cartQuantity)
	}

	async itemNameVisible() {
		return await this.isElementVisible(
			productsPagePageObjects.fleeceJacketname,
			testData.notVisibleText
		)
	}

	async itemTextVisible() {
		return await this.isElementVisible(
			yourCartPagePageObjects.flecceJacketText,
			testData.notVisibleText
		)
	}

	async itemPriceVisible() {
		return await this.isElementVisible(
			yourCartPagePageObjects.fleeceJacketPrice,
			testData.notVisibleText
		)
	}

	async continueShoppingBtnIsEnabled() {
		return await this.isElementEnabled(
			yourCartPagePageObjects.continueShoppingButton,
			testData.notEnabledText
		)
	}

	async removeBtnIsEnabled() {
		return await this.isElementEnabled(yourCartPagePageObjects.removeButton, testData.notEnabledText)
	}

	async checkoutBtnIsEnabled() {
		return await this.isElementEnabled(yourCartPagePageObjects.checkoutButton, testData.notEnabledText)
	}

	async VerifySocialandFooterLinks() {
		await this.isElementVisible(productsPagePageObjects.facebookLink, testData.notVisibleText)
		await this.isElementVisible(productsPagePageObjects.twitterLink, testData.notVisibleText)
		await this.isElementVisible(productsPagePageObjects.linkedInLink, testData.notVisibleText)
		await this.isElementVisible(productsPagePageObjects.footerText, testData.notVisibleText)
	}

	async clickContinueShoppingBtn() {
		return await this.waitAndClick(yourCartPagePageObjects.continueShoppingButton)
	}

	async clickCheckoutBtn() {
		return await this.waitAndClick(yourCartPagePageObjects.checkoutButton)
	}

	async clickRemoveBtnForItems() {
		await this.waitAndClick(yourCartPagePageObjects.removeButton)
		return await this.waitAndClick(yourCartPagePageObjects.removeButtonTshirtRed)
	}

	async cartItemAndQuantityLabelNotVisible() {
		await this.isElementNotVisible(yourCartPagePageObjects.cartQuantityLabel, testData.notAvailabletext)
		await this.isElementNotVisible(yourCartPagePageObjects.cartItemLabel, testData.notAvailabletext)
	}
}
export default YourCartPage
