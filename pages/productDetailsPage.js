import BasePage from './basePage'
import fs from 'fs'
import * as productsPagePageObjects from "../pageobjects/productsPage";
import * as productDetailsPagePageObjects from "../pageobjects/productDetailsPage";

const testData = JSON.parse(fs.readFileSync(`./data/users.json`, `utf-8`))

class ProductDetailsPage extends BasePage {
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

	async imageVisible() {
		return await this.isElementVisible(productDetailsPagePageObjects.image, testData.notVisibleText)
	}

	async backToProductsButtonIsEnabled() {
		return await this.isElementEnabled(
			productDetailsPagePageObjects.backToProductsButton,
			testData.notEnabledText
		)
	}

	async productNameVisible() {
		return await this.isElementVisible(productDetailsPagePageObjects.productName, testData.notVisibleText)
	}

	async productDescriptionVisible() {
		return await this.isElementVisible(
			productsPagePageObjects.productDescription,
			testData.notVisibleText
		)
	}

	async productDescriptionVisible() {
		return await this.isElementVisible(
			productDetailsPagePageObjects.productDescription,
			testData.notVisibleText
		)
	}

	async productPriceVisible() {
		return await this.isElementVisible(productDetailsPagePageObjects.productPrice, testData.notVisibleText)
	}

	async clickAddToCartButton() {
		await this.isElementEnabled(productDetailsPagePageObjects.addToCartButton, testData.notEnabledText)
		return await this.waitAndClick(productDetailsPagePageObjects.addToCartButton)
	}

	async clickRemoveButton() {
		await this.isElementEnabled(productDetailsPagePageObjects.removeButton, testData.notEnabledText)
		return await this.waitAndClick(productDetailsPagePageObjects.removeButton)
	}

	async shoppingCartCount() {
		return await this.verifyElementText(
			productsPagePageObjects.shoppingCartLink,
			testData.shoppingCartCount
		)
	}

	async shoppingCartCountAsEmpty() {
		return await this.verifyElementText(
			productsPagePageObjects.shoppingCartLink,
			testData.cartCountEmpty
		)
	}

	async VerifySocialandFooterLinks() {
		await this.isElementVisible(productsPagePageObjects.facebookLink, testData.notVisibleText)
		await this.isElementVisible(productsPagePageObjects.twitterLink, testData.notVisibleText)
		await this.isElementVisible(productsPagePageObjects.linkedInLink, testData.notVisibleText)
		await this.isElementVisible(productsPagePageObjects.footerText, testData.notVisibleText)
	}

	async clickBackToProductsButton() {
		return await this.waitAndClick(
			productDetailsPagePageObjects.backToProductsButton,
			testData.notEnabledText
		)
	}
}
export default ProductDetailsPage
