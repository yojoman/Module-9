const BasePage = require("./base.page.js");

class ProductPage extends BasePage {
  getProductButton(buttonName) {
    return $(`.//span[text()='${buttonName}']`);
  }

  getCartTitleText(text) {
    return $(`.//div[contains(text(),'${text}')]`);
  }

  getProductTitleText(text) {
    return $(`.//h1[contains(text(),'${text}')]`);
  }

  get offersListFrame() {
    return $(".//div[@class='offers-list']");
  }

  get forumMessagesFrame() {
    return $(".//ul[@class='b-messages-thread']");
  }

  get priceOfProduct() {
    return $(".//a[contains(@class,'js-description-price-link')]");
  }

  get productImage() {
    return $(".//img[@id='device-header-image']");
  }

  async clickOnButton(buttonName) {
    await this.getProductButton(buttonName).waitForDisplayed();
    await this.getProductButton(buttonName).click();
  }
}

module.exports = new ProductPage();
