import BasePage from './basePage'
import fs from 'fs'
import * as productsPagePageObjects from '../pageobjects/productsPage'

const testData = JSON.parse(fs.readFileSync(`./data/users.json`, `utf-8`))

class ProductsPage extends BasePage {
	constructor(page) {
		super(page)
	}

	async verifyProductsPageLogoVisible() {
		return await this.isElementVisible(productsPagePageObjects.appLogo)
	}

	async verifyProductsPageTitleVisible() {
		return await this.isElementVisible(productsPagePageObjects.landingPageTitle)
	}

	async verifyPeekImage() {
		return await this.isElementVisible(productsPagePageObjects.landingPageImage)
	}

	async burgerButtonVisible() {
		return await this.isElementVisible(productsPagePageObjects.burgerMenuBtn)
	}

	async burgerButtonClick() {
		return await this.waitAndClick(productsPagePageObjects.burgerMenuBtn)
	}

	async burgerCrossButtonVisible() {
		return await this.isElementVisible(
			productsPagePageObjects.burgerCrossButton
		)
	}

	async burgerCrossButtonClick() {
		return await this.waitAndClick(productsPagePageObjects.burgerCrossButton)
	}

	async allItemsSideBarLink() {
		return await this.isElementVisible(
			productsPagePageObjects.allItemsSideBarLink
		)
	}

	async aboutSideBarLink() {
		return await this.isElementVisible(productsPagePageObjects.aboutSideBarLink)
	}

	async clickAboutSideBarLink() {
		return await this.waitAndClick(productsPagePageObjects.aboutSideBarLink)
	}

	async logoutSideBarLink() {
		await this.isElementVisible(productsPagePageObjects.logoutSideBarLink)
		return await this.waitForPageLoad()
	}

	async clickLogoutSideBarLink() {
		await this.wait()
		return await this.waitAndClick(productsPagePageObjects.logoutSideBarLink)
	}

	async resetSideBarLink() {
		return await this.isElementVisible(productsPagePageObjects.resetSideBarLink)
	}

	async shoppingCartLink() {
		return await this.isElementVisible(productsPagePageObjects.shoppingCartLink)
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

	async shoppingCartCountAsTwo() {
		return await this.verifyElementText(
			productsPagePageObjects.shoppingCartLink,
			testData.cartCountAsTwo
		)
	}
	123
	async shoppingCartCountAsSix() {
		return await this.verifyElementText(
			productsPagePageObjects.shoppingCartLink,
			testData.cartCountAsSix
		)
	}

	async clickShoppingCartLink() {
		return await this.waitAndClick(productsPagePageObjects.shoppingCartLink)
	}

	async productSortContainerVisible() {
		return await this.isElementVisible(
			productsPagePageObjects.productSortContainer
		)
	}

	async selectZAFromDropDown() {
		return await this.selectValueFromDropdown(
			productsPagePageObjects.productSortContainer,
			testData.optionZA
		)
	}

	async selectLowToHighFromDropDown() {
		return await this.selectValueFromDropdown(
			productsPagePageObjects.productSortContainer,
			testData.optionLowToHigh
		)
	}

	async selectHighToLowFromDropDown() {
		return await this.selectValueFromDropdown(
			productsPagePageObjects.productSortContainer,
			testData.optionHighToLow
		)
	}

	async inventoryContainerVisible() {
		return await this.isElementVisible(
			productsPagePageObjects.inventoryContainer
		)
	}

	async backPackItem() {
		await this.isElementVisible(productsPagePageObjects.backPackImage)
		await this.isElementVisible(productsPagePageObjects.backPackName)
		await this.isElementVisible(productsPagePageObjects.backPackText)
		await this.verifyElementText(
			productsPagePageObjects.backPackText,
			testData.backPackText
		)
		await this.isElementVisible(productsPagePageObjects.backPackPrice)
		await this.isElementEnabled(productsPagePageObjects.backPackAddToCartBtn)
	}

	async addToCartButtonIsEnabled() {
		return await this.isElementVisible(
			productsPagePageObjects.backPackAddToCartBtn
		)
	}

	async clickBackPackItem() {
		return await this.waitAndClick(productsPagePageObjects.backPackImage)
	}

	async clickAddToCartBtn() {
		return await this.waitAndClick(productsPagePageObjects.backPackAddToCartBtn)
	}

	async clickRemoveButton() {
		return await this.waitAndClick(productsPagePageObjects.removeButton)
	}

	async boltTshirtItem() {
		await this.isElementVisible(productsPagePageObjects.allItemsSideBarLink)
		await this.isElementVisible(productsPagePageObjects.boltTshirtName)
		await this.isElementVisible(productsPagePageObjects.boltTshirtText)
		await this.verifyElementText(
			productsPagePageObjects.boltTshirtText,
			testData.boltTshirtText
		)
		await this.isElementVisible(productsPagePageObjects.boltTshirtPrice)
		await this.isElementEnabled(productsPagePageObjects.boltTshirtAddToCartBtn)
	}

	async onesieItem() {
		await this.isElementVisible(productsPagePageObjects.onesieImage)
		await this.isElementVisible(productsPagePageObjects.onesieName)
		await this.isElementVisible(productsPagePageObjects.onesieText)
		await this.verifyElementText(
			productsPagePageObjects.onesieText,
			testData.onesieText
		)
		await this.isElementVisible(productsPagePageObjects.onesiePrice)
		await this.isElementEnabled(productsPagePageObjects.onesieAddToCartBtn)
	}

	async bikeLightItem() {
		await this.isElementVisible(productsPagePageObjects.bikeLightImage)
		await this.isElementVisible(productsPagePageObjects.bikeLightName)
		await this.isElementVisible(productsPagePageObjects.bikeLightText)
		await this.verifyElementText(
			productsPagePageObjects.bikeLightText,
			testData.bikeLightText
		)
		await this.isElementVisible(productsPagePageObjects.bikeLightPrice)
		await this.isElementEnabled(productsPagePageObjects.bikeLightAddToCartBtn)
	}

	async fleeceJacketItem() {
		await this.isElementVisible(productsPagePageObjects.fleeceJacketImage)
		await this.isElementVisible(productsPagePageObjects.fleeceJacketname)
		await this.isElementVisible(productsPagePageObjects.flecceJacketText)
		await this.verifyElementText(
			productsPagePageObjects.flecceJacketText,
			testData.fleeceJacketText
		)
		await this.isElementVisible(productsPagePageObjects.fleeceJacketPrice)
		await this.isElementEnabled(
			productsPagePageObjects.fleeceJacketAddToCartBtn
		)
	}

	async clickAddToCart() {
		await this.isElementEnabled(
			productsPagePageObjects.fleeceJacketAddToCartBtn
		)
		return await this.waitAndClick(
			productsPagePageObjects.fleeceJacketAddToCartBtn
		)
	}

	async clickAddToCartForItems() {
		return await this.clickAllElements(productsPagePageObjects.addtoCartBtnAll)
	}

	async tshirtRedItem() {
		await this.isElementVisible(productsPagePageObjects.tshirtRedImage)

		await this.isElementVisible(productsPagePageObjects.tshirtRedName)

		await this.isElementVisible(productsPagePageObjects.tshirtRedText)

		await this.verifyElementText(
			productsPagePageObjects.tshirtRedText,
			testData.tshirtRedText
		)

		await this.isElementVisible(productsPagePageObjects.tshirtRedPrice)

		await this.isElementEnabled(productsPagePageObjects.tshirtRedAddToCartBtn)
	}

	async getFirstItemFromInventory() {
		const firstItem = await this.getFirstElementFromTheList(
			productsPagePageObjects.listOfElements
		)
		return firstItem
	}

	async getLastItemFromInventory() {
		const lastItem = await this.getLastElementFromTheList(
			productsPagePageObjects.listOfElements
		)
		return lastItem
	}

	async footerTextVisible() {
		return await this.isElementVisible(productsPagePageObjects.footerText)
	}

	async socialChannelLinksVisible() {
		await this.isElementVisible(productsPagePageObjects.twitterLink)

		await this.isElementVisible(productsPagePageObjects.facebookLink)

		await this.isElementVisible(productsPagePageObjects.linkedInLink)
	}
}
export default ProductsPage
