import BasePage from "./basePage";
import fs from "fs";
import * as productsPagePageObjects from "../pageobjects/productsPage";

const testData = JSON.parse(fs.readFileSync(`./data/users.json`, `utf-8`));

class ProductsPage extends BasePage {
  constructor(page) {
    super(page);
  }

  async verifyProductsPageLogoVisible() {
    return await this.isElementVisible(
      productsPagePageObjects.appLogo,
      testData.notVisibleText
    );
  }

  async verifyProductsPageTitleVisible() {
    return await this.isElementVisible(
      productsPagePageObjects.landingPageTitle,
      testData.notVisibleText
    );
  }

  async verifyPeekImage() {
    return await this.isElementVisible(
      productsPagePageObjects.landingPageImage,
      testData.notVisibleText
    );
  }

  async burgerButtonVisible() {
    return await this.isElementVisible(
      productsPagePageObjects.burgerMenuBtn,
      testData.notVisibleText
    );
  }

  async burgerButtonClick() {
    return await this.waitAndClick(productsPagePageObjects.burgerMenuBtn);
  }

  async burgerCrossButtonVisible() {
    return await this.isElementVisible(
      productsPagePageObjects.burgerCrossButton,
      testData.notVisibleText
    );
  }

  async burgerCrossButtonClick() {
    return await this.waitAndClick(productsPagePageObjects.burgerCrossButton);
  }

  async allItemsSideBarLink() {
    return await this.isElementVisible(
      productsPagePageObjects.allItemsSideBarLink,
      testData.notVisibleText
    );
  }

  async aboutSideBarLink() {
    return await this.isElementVisible(
      productsPagePageObjects.aboutSideBarLink,
      testData.notVisibleText
    );
  }

  async clickAboutSideBarLink() {
    return await this.waitAndClick(productsPagePageObjects.aboutSideBarLink);
  }

  async logoutSideBarLink() {
    await this.isElementVisible(
      productsPagePageObjects.logoutSideBarLink,
      testData.notVisibleText
    );
    return await this.waitForPageLoad();
  }

  async clickLogoutSideBarLink() {
    await this.wait();
    return await this.waitAndClick(productsPagePageObjects.logoutSideBarLink);
  }

  async resetSideBarLink() {
    return await this.isElementVisible(
      productsPagePageObjects.resetSideBarLink,
      testData.notVisibleText
    );
  }

  async shoppingCartLink() {
    return await this.isElementVisible(
      productsPagePageObjects.shoppingCartLink,
      testData.notVisibleText
    );
  }

  async shoppingCartCount() {
    return await this.verifyElementText(
      productsPagePageObjects.shoppingCartLink,
      testData.shoppingCartCount
    );
  }

  async shoppingCartCountAsEmpty() {
    return await this.verifyElementText(
      productsPagePageObjects.shoppingCartLink,
      testData.cartCountEmpty
    );
  }

  async shoppingCartCountAsTwo() {
    return await this.verifyElementText(
      productsPagePageObjects.shoppingCartLink,
      testData.cartCountAsTwo
    );
  }
  123;
  async shoppingCartCountAsSix() {
    return await this.verifyElementText(
      productsPagePageObjects.shoppingCartLink,
      testData.cartCountAsSix
    );
  }

  async clickShoppingCartLink() {
    return await this.waitAndClick(productsPagePageObjects.shoppingCartLink);
  }

  async productSortContainerVisible() {
    return await this.isElementVisible(
      productsPagePageObjects.productSortContainer,
      testData.notVisibleText
    );
  }

  async selectZAFromDropDown() {
    return await this.selectValueFromDropdown(
      productsPagePageObjects.productSortContainer,
      testData.optionZA
    );
  }

  async selectLowToHighFromDropDown() {
    return await this.selectValueFromDropdown(
      productsPagePageObjects.productSortContainer,
      testData.optionLowToHigh
    );
  }

  async selectHighToLowFromDropDown() {
    return await this.selectValueFromDropdown(
      productsPagePageObjects.productSortContainer,
      testData.optionHighToLow
    );
  }

  async inventoryContainerVisible() {
    return await this.isElementVisible(
      productsPagePageObjects.inventoryContainer,
      testData.notVisibleText
    );
  }

  async backPackItem() {
    await this.isElementVisible(
      productsPagePageObjects.backPackImage,
      testData.notVisibleText
    );
    await this.isElementVisible(
      productsPagePageObjects.backPackName,
      testData.notVisibleText
    );
    await this.isElementVisible(
      productsPagePageObjects.backPackText,
      testData.notVisibleText
    );
    await this.verifyElementText(
      productsPagePageObjects.backPackText,
      testData.backPackText
    );
    await this.isElementVisible(
      productsPagePageObjects.backPackPrice,
      testData.notVisibleText
    );
    await this.isElementEnabled(
      productsPagePageObjects.backPackAddToCartBtn,
      testData.notEnabledText
    );
  }

  async addToCartButtonIsEnabled() {
    return await this.isElementVisible(
      productsPagePageObjects.backPackAddToCartBtn,
      testData.notEnabledText
    );
  }

  async clickBackPackItem() {
    return await this.waitAndClick(productsPagePageObjects.backPackImage);
  }

  async clickAddToCartBtn() {
    return await this.waitAndClick(
      productsPagePageObjects.backPackAddToCartBtn
    );
  }

  async clickRemoveButton() {
    return await this.waitAndClick(productsPagePageObjects.removeButton);
  }

  async boltTshirtItem() {
    await this.isElementVisible(
      productsPagePageObjects.allItemsSideBarLink,
      testData.notVisibleText
    );
    await this.isElementVisible(
      productsPagePageObjects.boltTshirtName,
      testData.notVisibleText
    );
    await this.isElementVisible(
      productsPagePageObjects.boltTshirtText,
      testData.notVisibleText
    );
    await this.verifyElementText(
      productsPagePageObjects.boltTshirtText,
      testData.boltTshirtText
    );
    await this.isElementVisible(
      productsPagePageObjects.boltTshirtPrice,
      testData.notVisibleText
    );
    await this.isElementEnabled(
      productsPagePageObjects.boltTshirtAddToCartBtn,
      testData.notEnabledText
    );
  }

  async onesieItem() {
    await this.isElementVisible(
      productsPagePageObjects.onesieImage,
      testData.notVisibleText
    );
    await this.isElementVisible(
      productsPagePageObjects.onesieName,
      testData.notVisibleText
    );
    await this.isElementVisible(
      productsPagePageObjects.onesieText,
      testData.notVisibleText
    );
    await this.verifyElementText(
      productsPagePageObjects.onesieText,
      testData.onesieText
    );
    await this.isElementVisible(
      productsPagePageObjects.onesiePrice,
      testData.notVisibleText
    );
    await this.isElementEnabled(
      productsPagePageObjects.onesieAddToCartBtn,
      testData.notEnabledText
    );
  }

  async bikeLightItem() {
    await this.isElementVisible(
      productsPagePageObjects.bikeLightImage,
      testData.notVisibleText
    );
    await this.isElementVisible(
      productsPagePageObjects.bikeLightName,
      testData.notVisibleText
    );
    await this.isElementVisible(
      productsPagePageObjects.bikeLightText,
      testData.notVisibleText
    );
    await this.verifyElementText(
      productsPagePageObjects.bikeLightText,
      testData.bikeLightText
    );
    await this.isElementVisible(
      productsPagePageObjects.bikeLightPrice,
      testData.notVisibleText
    );
    await this.isElementEnabled(
      productsPagePageObjects.bikeLightAddToCartBtn,
      testData.notEnabledText
    );
  }

  async fleeceJacketItem() {
    await this.isElementVisible(
      productsPagePageObjects.fleeceJacketImage,
      testData.notVisibleText
    );
    await this.isElementVisible(
      productsPagePageObjects.fleeceJacketname,
      testData.notVisibleText
    );
    await this.isElementVisible(
      productsPagePageObjects.flecceJacketText,
      testData.notVisibleText
    );
    await this.verifyElementText(
      productsPagePageObjects.flecceJacketText,
      testData.fleeceJacketText
    );
    await this.isElementVisible(
      productsPagePageObjects.fleeceJacketPrice,
      testData.notVisibleText
    );
    await this.isElementEnabled(
      productsPagePageObjects.fleeceJacketAddToCartBtn,
      testData.notEnabledText
    );
  }

  async clickAddToCart() {
    await this.isElementEnabled(
      productsPagePageObjects.fleeceJacketAddToCartBtn,
      testData.notEnabledText
    );
    return await this.waitAndClick(
      productsPagePageObjects.fleeceJacketAddToCartBtn
    );
  }

  async clickAddToCartForItems() {
    return await this.clickAllElements(productsPagePageObjects.addtoCartBtnAll);
  }

  async tshirtRedItem() {
    await this.isElementVisible(
      productsPagePageObjects.tshirtRedImage,
      testData.notVisibleText
    );
    await this.isElementVisible(
      productsPagePageObjects.tshirtRedName,
      testData.notVisibleText
    );
    await this.isElementVisible(
      productsPagePageObjects.tshirtRedText,
      testData.notVisibleText
    );
    await this.verifyElementText(
      productsPagePageObjects.tshirtRedText,
      testData.tshirtRedText
    );
    await this.isElementVisible(
      productsPagePageObjects.tshirtRedPrice,
      testData.notVisibleText
    );
    await this.isElementEnabled(
      productsPagePageObjects.tshirtRedAddToCartBtn,
      testData.notEnabledText
    );
  }

  async getFirstItemFromInventory() {
    const firstItem = await this.getFirstElementFromTheList(
      productsPagePageObjects.listOfElements
    );
    return firstItem;
  }

  async getLastItemFromInventory() {
    const lastItem = await this.getLastElementFromTheList(
      productsPagePageObjects.listOfElements
    );
    return lastItem;
  }

  async footerTextVisible() {
    return await this.isElementVisible(
      productsPagePageObjects.footerText,
      testData.notVisibleText
    );
  }

  async socialChannelLinksVisible() {
    await this.isElementVisible(
      productsPagePageObjects.twitterLink,
      testData.notVisibleText
    );
    await this.isElementVisible(
      productsPagePageObjects.facebookLink,
      testData.notVisibleText
    );
    await this.isElementVisible(
      productsPagePageObjects.linkedInLink,
      testData.notVisibleText
    );
  }
}
export default ProductsPage;
