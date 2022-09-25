module.exports = class BasePage {
  async openPage() {
    return await browser.url("/");
  }

  getButton(buttonName) {
    return $(`.//a[contains(text(),'${buttonName}')]`);
  }

  getCommonPageTitle(title) {
    return $(`.//h1[contains(text(),"${title}")]`);
  }
};
