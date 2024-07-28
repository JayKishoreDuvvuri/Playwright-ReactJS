/* Scenario 1: 
Login as a standard user to verify the products page and logout from the application

Scenario Description: 
User logs into the website and verifies all the elements on the products page and logs out from the application. 
This is like a Smoke test.

Test Steps:
1.	User is on the Login Page
2.	Verify the Logo, title, url, username, password fields, login button, login and password credentials on the login page
3.	Login as a standard user
4.	User is on the Landing/Products page. Verify the Landing page logo and URL
5.	Verify the PRODUCTS title and peek image visible on the home page
6.	Verify all the options Burger menu item, ALL ITEMS; ABOUT; LOGOUT AND RESET APP STATE are visible on inventory sidebar links on left side of the page
7.	Verify the shopping cart icon and product sort container visible on the top right of the page
8.	Verify the Inventory Product item list is visible
9.	Verify the footer text and swag bot footer is visible
10.	Click on “About” navbar link from the “inventory sidebar panel” and check whether user is navigated to saucelabs page
11.	Verify the Facebook logo visible 
12.	Click on Facebook social link and verify user is navigated to Facebook page
13.	User logout from the application and verify the login page
*/

import test from '../testFixtures/fixture'
import { expect } from '@playwright/test'
import fs from 'fs'
import * as loginPageObjects from '../pageobjects/loginPage'
import * as productsPagePageObjects from '../pageobjects/productsPage'
import * as config from '../config'

const testData = JSON.parse(fs.readFileSync(`./data/users.json`, `utf-8`))

test.describe
	.parallel('@smoke: Login as a standard user to verify the products page and logout from the application', () => {
	test('Login to App as a standard user', async ({
		loginPage,
		productsPage
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

		await test.step(`Verify the products page sidebar links visible and click on About link to check user is navigated to saucelabs page`, async () => {
			await productsPage.burgerButtonVisible()
			await productsPage.burgerButtonClick()
			await productsPage.allItemsSideBarLink()
			await productsPage.logoutSideBarLink()
			await productsPage.resetSideBarLink()
			await productsPage.burgerCrossButtonVisible()
			await productsPage.burgerCrossButtonClick()
		})

		await test.step(`Verify Inventory container and the inventory list is visible`, async () => {
			await productsPage.inventoryContainerVisible()
			await productsPage.backPackItem()
			await productsPage.boltTshirtItem()
			await productsPage.onesieItem()
			await productsPage.bikeLightItem()
			await productsPage.fleeceJacketItem()
			await productsPage.tshirtRedItem()
		})

		await test.step(`Verify the footer text+swag bot footer+social channel links are visible`, async () => {
			await productsPage.footerTextVisible()
			await productsPage.socialChannelLinksVisible()
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

	test('Click on the "About" side nav bar link to check whether user is navigated to sauce labs page', async ({
		loginPage,
		productsPage
	}) => {
		await test.step(`Verify the products page shopping cart icon and product sort container visible `, async () => {
			await loginPage.openApp()
			await loginPage.loginAsStandardUser()
		})
	})
})

test('Click on Facebook link and check whether user is navigated to Facebook page', async ({
	browser
}) => {
	const context = await browser.newContext()
	const page = await context.newPage()
 
	await page.goto(config.baseUrl)
	await page.fill(loginPageObjects.username, testData.standard_user)
	await page.fill(loginPageObjects.password, testData.password)
	await page.click(loginPageObjects.loginButton)

	const link = page.locator(productsPagePageObjects.facebookLink)
	const [newPage] = await Promise.all([
		context.waitForEvent('page'),
		link.click()
	])
	await newPage.waitForLoadState('networkidle')
	expect(await newPage.title()).toContain(config.facebookTitle)
	expect(newPage.url()).toBe(config.facebookUrl)
})
