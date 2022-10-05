const BasePage = require("./base.page.js");

class ProductPage extends BasePage {
  get offersButton() {
    return $(".//span[text()='Предложения продавцов']");
  }

  get offersList() {
    return $(".//div[@class='offers-list']");
  }

  get priceOfProduct() {
    return $(".//a[contains(@class,'js-description-price-link')]");
  }

  get productIamge() {
    return $(".//img[@id='device-header-image']");
  }

  getProductTitleText(text) {
    return $(`.//h1[contains(text(),'${text}')]`);
  }

  async openOffersPage() {
    await this.offersButton.waitForDisplayed();
    await this.offersButton.click();
    await this.offersList.waitForDisplayed();
  }
}

module.exports = new ProductPage();
