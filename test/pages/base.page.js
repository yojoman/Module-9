const logger = require("../config/logger.config");

class BasePage {
  async openPage() {
    logger.info(`Opening Main page page`);
    return await browser.url("/");
  }

  async getTitle() {
    const currentTitle = await browser.getTitle();
    logger.debug(`Current title is "${currentTitle}"`);
    return currentTitle;
  }

  async back() {
    logger.info(`Going back on previous page`);
    return browser.back();
  }

  async waitForElementDisplayed(element) {
    const elementText = await element.getText();
    logger.debug(`Waiting for "${elementText}" element`);
    return element.waitForDisplayed();
  }
}

module.exports = BasePage;
