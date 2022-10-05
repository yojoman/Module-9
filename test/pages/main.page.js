const BasePage = require("./base.page.js");
const commonPage = require("./common.page.js");

class MainPage extends BasePage {
  get firstSearchField() {
    return $(".//ul/li[@class='search__result'][1]");
  }

  get headerMenu() {
    return $$('.//span[contains(@class,"b-main-navigation__text")]');
  }

  get footerMenu() {
    return $$('.//a[contains(@class,"footer-style__link footer-style__link")]');
  }

  getHeaderMenuText() {
    const elements = this.headerMenu.map((element) => element.getText());
    return elements;
  }

  getFooterMenuText() {
    const elements = this.footerMenu.map((element) => element.getText());
    return elements;
  }

  async typeInSearhField(searchText) {
    await commonPage.searchInputField.waitForDisplayed();
    await commonPage.searchInputField.setValue(searchText);
  }
  async openFirstItemFromSearchField() {
    const searchIframe = await browser.$(".//iframe[@class='modal-iframe']");
    browser.switchToFrame(searchIframe);
    await this.firstSearchField.waitForDisplayed();
    await this.firstSearchField.click();
    browser.switchToParentFrame();
  }
}

module.exports = new MainPage();
