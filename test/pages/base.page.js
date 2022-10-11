module.exports = class BasePage {
  async openPage() {
    return await browser.url("https://www.onliner.by/");
  }

  async getTitle() {
    return browser.getTitle();
  }

  async back() {
    return browser.back();
  }

  async waitForElementDisplayed(element) {
    await element.waitForDisplayed();
  }
};
