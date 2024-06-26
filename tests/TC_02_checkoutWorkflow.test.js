/* Scenario 2: 
Login as a standard user to complete the checkout workflow

Scenario Description: 
User logs into the website and completes the checkout workflow and logs out from the application. 
This is a Happy path test scenario.

Test Steps:
1.	Login as a standard user
2.	User is on Products page
3.	Verify if the product list is sorted and displayed correctly in the right order selected.
4.	Select an item from the Inventory list on Products page and click on Add to cart button
5.	Check the shopping cart is updated to “1” item and click on it
6.	User is navigated to Your Cart page and verify all the elements on Your cart page
7.	Click on Checkout button
8.	User is navigated to Checkout: Your Information page and verify all the elements on this page
9.	Fill in Firstname, Lastname and postal code
10.	Click on continue
11.	User is on Checkout: Overview page and verify all the elements on this page
12.	Click on Finish Button
13.	User navigates to Checkout: Complete page and completed the checkout workflow
14.	verify all the elements on Checkout: Complete page
15.	Click on Back home button, user is navigated back to Products page
16.	User logout from the application and is navigated back to login page
*/

import test from '../testFixtures/fixture'
import { expect } from '@playwright/test'
import fs from 'fs'
import * as config from '../config'

const testData = JSON.parse(fs.readFileSync(`./data/users.json`, `utf-8`))

test.describe('Login as a standard user to complete the checkout workflow', () => {
	test('Login to App as a standard user', async ({
		loginPage,
		productsPage,
		yourCartPage,
		checkoutYourInformationPage,
		checkoutOverviewPage,
		checkoutCompletePage
	}) => {
		await test.step(`Open the APP and check logo`, async () => {
			await loginPage.openApp()
			await loginPage.loginPageLogo()
			expect(await loginPage.getTitle()).toBe(config.title)
			expect(await loginPage.getUrl()).toContain(config.baseUrl)
		})

		await test.step(`Login as a Standard user`, async () => {
			await loginPage.loginAsStandardUser()
		})

		await test.step(`Verify landing page logo+title+image+url visible`, async () => {
			await productsPage.verifyProductsPageLogoVisible()
			await productsPage.verifyProductsPageTitleVisible()
			expect(await productsPage.getUrl()).toContain(config.landingPageUrl)
		})

		await test.step(`Click on add to cart button to select the item Fleece Jacket and check the item count of shopping cart`, async () => {
			await productsPage.clickAddToCart()
			await productsPage.shoppingCartLink()
			await productsPage.shoppingCartCount()
		})

		await test.step(`Click on shopping cart link and verify user is navigated to Your Cart page`, async () => {
			await productsPage.clickShoppingCartLink()
			expect(await yourCartPage.getTitle()).toBe(config.title)
			expect(await yourCartPage.getUrl()).toBe(config.yourCartUrl)
		})

		await test.step(`Verify all the elements on the Your Cart page and click on Checkout button`, async () => {
			await yourCartPage.verifyLogoVisible()
			await yourCartPage.verifyBurgerMenuButtonVisible()
			await yourCartPage.shoppingCartLinkVisible()
			await yourCartPage.shoppingCartCount()
			await yourCartPage.titleVisible()
			await yourCartPage.quantityAndDescriptionLabelVisible()
			await yourCartPage.cartQuantityVisible()
			await yourCartPage.itemNameVisible()
			await yourCartPage.itemTextVisible()
			await yourCartPage.itemPriceVisible()
			await yourCartPage.continueShoppingBtnIsEnabled()
			await yourCartPage.removeBtnIsEnabled()
			await yourCartPage.checkoutBtnIsEnabled()
			await yourCartPage.VerifySocialandFooterLinks()
			await yourCartPage.clickCheckoutBtn()
		})

		await test.step(`User is navigated to Checkout:Your Information page`, async () => {
			await checkoutYourInformationPage.titleVisible()
			expect(await checkoutYourInformationPage.getUrl()).toBe(
				config.checkoutYourInformationUrl
			)
		})

		await test.step(`Verify all the elements on the Checkout:Your Information page`, async () => {
			await checkoutYourInformationPage.verifyLogoVisible()
			await checkoutYourInformationPage.titleVisible()
			await checkoutYourInformationPage.verifyBurgerMenuButtonVisible()
			await checkoutYourInformationPage.shoppingCartLinkVisible()
			await checkoutYourInformationPage.shoppingCartCount()
			await checkoutYourInformationPage.cancelBtnIsEnabled()
			await checkoutYourInformationPage.continueBtnIsEnabled()
			await checkoutYourInformationPage.VerifySocialandFooterLinks()
		})

		await test.step(`Type in First name, Last name and Postal code`, async () => {
			await checkoutYourInformationPage.typeFirstName()
			await checkoutYourInformationPage.typeLastName()
			await checkoutYourInformationPage.typePostalCode()
		})

		await test.step(`Click on the Continue Button and check whether User is navigated to Checkout:Your Information page`, async () => {
			await checkoutYourInformationPage.titleVisible()
			await checkoutYourInformationPage.clickContinueBtn()
			expect(await checkoutYourInformationPage.getUrl()).toBe(
				config.checkoutOverviewUrl
			)
		})

		await test.step(`Verify all the elements on the Checkout:Overview page`, async () => {
			await checkoutOverviewPage.verifyLogoVisible()
			await checkoutOverviewPage.verifyBurgerMenuButtonVisible()
			await checkoutOverviewPage.titleVisible()
			await checkoutOverviewPage.shoppingCartLinkVisible()
			await checkoutOverviewPage.shoppingCartCount()
			await checkoutOverviewPage.quantityAndDescriptionLabelVisible()
			await checkoutOverviewPage.cartQuantityVisible()
			await checkoutOverviewPage.itemNameVisible()
			await checkoutOverviewPage.itemTextVisible()
			await checkoutOverviewPage.itemPriceVisible()
			await checkoutOverviewPage.secureCardInfoVisible()
			await checkoutOverviewPage.shippingInformationLabelVisible()
			await checkoutOverviewPage.deliveryMessageVisible()
			await checkoutOverviewPage.itemTotalLabelVisible()
			await checkoutOverviewPage.itemTaxLabelVisible()
			await checkoutOverviewPage.summaryTotalLabelVisible()
			await checkoutOverviewPage.cancelBtnIsEnabled()
			await checkoutOverviewPage.finishBtnIsEnabled()
			await checkoutOverviewPage.VerifySocialandFooterLinks()
		})

		await test.step(`Click on the Finish Button and check whether User is navigated to Checkout:Complete page`, async () => {
			await checkoutOverviewPage.titleVisible()
			await checkoutOverviewPage.clickFinishBtn()
			expect(await checkoutOverviewPage.getUrl()).toBe(
				config.checkoutCompleteUrl
			)
		})

		await test.step(`Verify all the elements on the Checkout:Complete page`, async () => {
			await checkoutCompletePage.verifyLogoVisible()
			await checkoutCompletePage.verifyBurgerMenuButtonVisible()
			await checkoutCompletePage.shoppingCartLinkVisible()
			await checkoutCompletePage.shoppingCartCount()
			await checkoutCompletePage.titleVisible()
			await checkoutCompletePage.completeHeaderVisible()
			await checkoutCompletePage.completeTextVisible()
			await checkoutCompletePage.ponyExpressImageVisible()
			await checkoutCompletePage.backHomeButtonISEnabled()
			await checkoutCompletePage.VerifySocialandFooterLinks()
		})

		await test.step(`Click on the Back Home Button on Checkout:Complete page and check whether User is navigated back to Products page`, async () => {
			await checkoutCompletePage.titleVisible()
			await checkoutCompletePage.clickBackHomeButton()
			expect(await checkoutCompletePage.getUrl()).toBe(config.landingPageUrl)
		})

		await test.step(`Standard user logout from the application and verify the login page`, async () => {
			await productsPage.burgerButtonVisible()
			await productsPage.burgerButtonClick()
			await productsPage.clickLogoutSideBarLink()
			await loginPage.loginPageLogo()
			expect(await loginPage.getTitle()).toBe(config.title)
			expect(await loginPage.getUrl()).toContain(config.baseUrl)
		})
	})
})
