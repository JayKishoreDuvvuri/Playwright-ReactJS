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
			testData.shoppingCartCount
		)
	}

	async titleVisible() {
		return await this.isElementVisible(checkoutOverviewPagePageObjects.title)
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
		return await this.isElementVisible(productsPageObjects.fleeceJacketname)
	}

	async itemTextVisible() {
		return await this.isElementVisible(yourCartPagePageObjects.flecceJacketText)
	}

	async itemPriceVisible() {
		return await this.isElementVisible(
			yourCartPagePageObjects.fleeceJacketPrice
		)
	}

	async paymentInformationLabelVisible() {
		return await this.isElementVisible(
			checkoutOverviewPagePageObjects.paymentInformationLabel
		)
	}

	async secureCardInfoVisible() {
		return await this.isElementVisible(
			checkoutOverviewPagePageObjects.secureCardInfo
		)
	}

	async shippingInformationLabelVisible() {
		return await this.isElementVisible(
			checkoutOverviewPagePageObjects.shippingInformationLabel
		)
	}

	async deliveryMessageVisible() {
		return await this.isElementVisible(
			checkoutOverviewPagePageObjects.deliveryMessage
		)
	}

	async itemTotalLabelVisible() {
		return await this.isElementVisible(
			checkoutOverviewPagePageObjects.itemTotalLabel
		)
	}

	async itemTaxLabelVisible() {
		return await this.isElementVisible(
			checkoutOverviewPagePageObjects.itemTaxLabel
		)
	}

	async summaryTotalLabelVisible() {
		return await this.isElementVisible(
			checkoutOverviewPagePageObjects.summaryTotalLabel
		)
	}

	async cancelBtnIsEnabled() {
		return await this.isElementEnabled(cancelButton)
	}

	async finishBtnIsEnabled() {
		return await this.isElementEnabled(
			checkoutOverviewPagePageObjects.finishButton
		)
	}

	async VerifySocialandFooterLinks() {
		await this.isElementVisible(productsPageObjects.facebookLink)
		await this.isElementVisible(productsPageObjects.twitterLink)
		await this.isElementVisible(productsPageObjects.linkedInLink)
		await this.isElementVisible(productsPageObjects.footerText)
	}

	async clickFinishBtn() {
		return await this.waitAndClick(checkoutOverviewPagePageObjects.finishButton)
	}
}
export default CheckoutOverviewPage
