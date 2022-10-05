module.exports = class BasePage {

  async openPage() {
    return await browser.url("/");
  }

  async getTitle() {
    return browser.getTitle();
  }
};
