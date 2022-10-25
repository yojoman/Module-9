const BasePage = require("./base.page.js");
const logger = require("../config/logger.config");

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

  getForumTitleText(text) {
    return $(`.//a[contains(text(),"${text}")]`);
  }

  get priceOfProduct() {
    return $(".//a[contains(@class,'js-description-price-link')]");
  }

  get productImage() {
    return $(".//img[@id='device-header-image']");
  }

  async clickOnButton(buttonName) {
    logger.debug(`Clicking on "${buttonName}" button`);
    await this.getProductButton(buttonName).waitForDisplayed();
    await this.getProductButton(buttonName).click();
  }

  async clickOnOffersButton(buttonName) {
    logger.debug(`Clicking on "${buttonName}" button`);
    await browser.performActions([
      {
        type: "pointer",
        id: "finger1",
        parameters: { pointerType: "mouse" },
        actions: [
          {
            type: "pointerMove",
            origin: "pointer",
            origin: await this.getProductButton(buttonName),
            x: 0,
            y: 0,
          },
          { type: "pointerDown", button: 0 },
          { type: "pointerUp", button: 0 },
        ],
      },
    ]);
  }

  async scrollAndClickOntoOffer() {
    logger.info(`Scrolling and clicking on the first offer`);
    await browser.execute(function () {
      document
        .querySelectorAll(".offers-list__button_cart")[1]
        .scrollIntoView();
      document.querySelectorAll(".offers-list__button_cart")[1].click();
    });
  }
}

module.exports = new ProductPage();
