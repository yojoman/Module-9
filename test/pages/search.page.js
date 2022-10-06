const BasePage = require("./base.page");

class SearchPage extends BasePage {
  get searchInputField() {
    return $(".//input[@class='fast-search__input']");
  }

  get firstItemInSearchField() {
    return $(".//ul/li[@class='search__result'][1]");
  }

  async typeInSearhField(searchText) {
    await this.searchInputField.waitForDisplayed();
    await this.searchInputField.setValue(searchText);
  }

  async openFirstItemFromSearchField() {
    const getIframe = await browser.$(".//iframe[@class='modal-iframe']");
    browser.switchToFrame(getIframe);
    await this.firstItemInSearchField.waitForDisplayed();
    await this.firstItemInSearchField.click();
    browser.switchToParentFrame();
  }
}

module.exports = new SearchPage();
