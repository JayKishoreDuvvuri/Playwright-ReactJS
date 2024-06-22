import BasePage from './basePage'
import fs from 'fs'
import * as productsPagePageObjects from '../pageobjects/productsPage'
import * as productDetailsPagePageObjects from '../pageobjects/productDetailsPage'

const testData = JSON.parse(fs.readFileSync(`./data/users.json`, `utf-8`))

class ProductDetailsPage extends BasePage {
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

	async imageVisible() {
		return await this.isElementVisible(productDetailsPagePageObjects.image)
	}

	async backToProductsButtonIsEnabled() {
		return await this.isElementEnabled(
			productDetailsPagePageObjects.backToProductsButton
		)
	}

	async productNameVisible() {
		return await this.isElementVisible(
			productDetailsPagePageObjects.productName
		)
	}

	async productDescriptionVisible() {
		return await this.isElementVisible(
			productsPagePageObjects.productDescription
		)
	}

	async productDescriptionVisible() {
		return await this.isElementVisible(
			productDetailsPagePageObjects.productDescription
		)
	}

	async productPriceVisible() {
		return await this.isElementVisible(
			productDetailsPagePageObjects.productPrice
		)
	}

	async clickAddToCartButton() {
		await this.isElementEnabled(productDetailsPagePageObjects.addToCartButton)
		return await this.waitAndClick(
			productDetailsPagePageObjects.addToCartButton
		)
	}

	async clickRemoveButton() {
		await this.isElementEnabled(productDetailsPagePageObjects.removeButton)
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
		await this.isElementVisible(productsPagePageObjects.facebookLink)
		await this.isElementVisible(productsPagePageObjects.twitterLink)
		await this.isElementVisible(productsPagePageObjects.linkedInLink)
		await this.isElementVisible(productsPagePageObjects.footerText)
	}

	async clickBackToProductsButton() {
		return await this.waitAndClick(
			productDetailsPagePageObjects.backToProductsButton
		)
	}
}
export default ProductDetailsPage
