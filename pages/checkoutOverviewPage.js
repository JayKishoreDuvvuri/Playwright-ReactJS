import BasePage from './basePage'
import fs from 'fs'
import * as productsPageObjects from '../pageobjects/productsPage'
import * as yourCartPagePageObjects from '../pageobjects/yourCartPage'
import { cancelButton } from '../pageobjects/checkoutYourInformationPage'
import * as checkoutOverviewPagePageObjects from '../pageobjects/checkoutOverviewPage'

const testData = JSON.parse(fs.readFileSync(`./data/users.json`, `utf-8`))

class CheckoutOverviewPage extends BasePage {
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
			testData.shoppingCartCount
		)
	}

	async titleVisible() {
		return await this.isElementVisible(checkoutOverviewPagePageObjects.title, testData.notVisibleText)
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
			productsPageObjects.fleeceJacketname,
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

	async paymentInformationLabelVisible() {
		return await this.isElementVisible(
			checkoutOverviewPagePageObjects.paymentInformationLabel,
			testData.notVisibleText
		)
	}

	async secureCardInfoVisible() {
		return await this.isElementVisible(checkoutOverviewPagePageObjects.secureCardInfo, testData.notVisibleText)
	}

	async shippingInformationLabelVisible() {
		return await this.isElementVisible(
			checkoutOverviewPagePageObjects.shippingInformationLabel,
			testData.notVisibleText
		)
	}

	async deliveryMessageVisible() {
		return await this.isElementVisible(checkoutOverviewPagePageObjects.deliveryMessage, testData.notVisibleText)
	}

	async itemTotalLabelVisible() {
		return await this.isElementVisible(checkoutOverviewPagePageObjects.itemTotalLabel, testData.notVisibleText)
	}

	async itemTaxLabelVisible() {
		return await this.isElementVisible(checkoutOverviewPagePageObjects.itemTaxLabel, testData.notVisibleText)
	}

	async summaryTotalLabelVisible() {
		return await this.isElementVisible(
			checkoutOverviewPagePageObjects.summaryTotalLabel,
			testData.notVisibleText
		)
	}

	async cancelBtnIsEnabled() {
		return await this.isElementEnabled(cancelButton, testData.notEnabledText)
	}

	async finishBtnIsEnabled() {
		return await this.isElementEnabled(checkoutOverviewPagePageObjects.finishButton, testData.notEnabledText)
	}

	async VerifySocialandFooterLinks() {
		await this.isElementVisible(productsPageObjects.facebookLink, testData.notVisibleText)
		await this.isElementVisible(productsPageObjects.twitterLink, testData.notVisibleText)
		await this.isElementVisible(productsPageObjects.linkedInLink, testData.notVisibleText)
		await this.isElementVisible(productsPageObjects.footerText, testData.notVisibleText)
	}

	async clickFinishBtn() {
		return await this.waitAndClick(checkoutOverviewPagePageObjects.finishButton, testData.notEnabledText)
	}
}
export default CheckoutOverviewPage
