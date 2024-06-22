import { expect } from '@playwright/test'

class BasePage {
	constructor(page) {
		this.page = page
	}

	async open() {
		return await this.page.goto('/')
	}

	async getTitle() {
		return await this.page.title()
	}

	async pause() {
		return await this.page.pause()
	}

	async getUrl() {
		return this.page.url()
	}

	async wait() {
		return this.page.waitForTimeout(2000)
	}

	async waitForPageLoad() {
		return await this.page.waitForLoadState('domcontentloaded')
	}

	async waitAndClick(selector) {
		return await this.page.click(selector)
	}

	async waitAndFill(selector, text) {
		return await this.page.fill(selector, text)
	}

	async keyPress(selector, key) {
		return await this.page.press(selector, key)
	}

	async takeScreenShot() {
		return expect(await this.page.screenshot()).toMatchSnapshot(
			'MyScreenShot.png'
		)
	}

	async verifyElementText(selector, text) {
    const locatorText = await this.page.locator(selector)
		return await expect(locatorText).toHaveText(text)
	}

	async verifyElementContainsText(selector, text) {
		const locatorText = await this.page.locator(selector)
		return await expect(locatorText).toContainText(text)
	}

	async selectValueFromDropdown(selector, text) {
		const dropdown = await this.page.locator(selector)
		return await dropdown.selectOption({ value: text })
	}

	async verifyElementAttribute(selector, attribute, value) {
		const textValue = await this.page.getAttribute(selector, attribute)
		return expect(textValue.trim()).toBe(value)
	}

	async getFirstElementFromTheList(selector) {
		const rows = await this.page.locator(selector)
		const count = await rows.count()
		for (let i = 0; i < count; ++i) {
			const firstItem = await rows.nth(0).textContent()
			return firstItem
		}
	}

	async getLastElementFromTheList(selector) {
		const rows = await this.page.locator(selector)
		const count = await rows.count()
		for (let i = 0; i < count; ++i) {
			const lastItem = await rows.nth(5).textContent()
			return lastItem
		}
	}

	async clickAllElements(selector) {
		const rows = await this.page.locator(selector)
		const count = 2
		for (let i = 0; i < count; ++i) {
			await rows.nth(i).click()
		}
	}

	async clickAllLinksInNewTabs(selector) {
		const rows = this.page.locator(selector)
		const count = rows.count()
		for (i in range(count)) {
			await rows.nth(i).click((modifiers = ['Control', 'Shift']))
		}
	}

	async isElementVisible(selector) {
		const element = this.page.locator(selector)
		return await expect(element).toBeVisible()
	}

	async isElementNotVisible(selector) {
		const element = this.page.locator(selector)
		return await expect(element).not.toBeVisible()
	}

	async isElementEnabled(selector) {
		const element = this.page.locator(selector)
		return await expect(element).toBeEnabled()
	}

	async isElementChecked(selector) {
		const element = this.page.locator(selector)
		return await expect(element).toBeChecked()
	}
}
export default BasePage
