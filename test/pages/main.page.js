const BasePage = require("./base.page.js");

class MainPage extends BasePage {
  get headerMenu() {
    return $$('.//span[contains(@class,"b-main-navigation__text")]');
  }

  get footerMenu() {
    return $$('.//a[contains(@class,"footer-style__link footer-style__link")]');
  }

  get catalogMenuButton() {
    return $('.//span[contains(text(),"Каталог")] [@class="b-main-navigation__text"]')
  }

  getHeaderMenuText() {
    const elements = this.headerMenu.map((element) => element.getText());
    return elements;
  }

  getFooterMenuText() {
    const elements = this.footerMenu.map((element) => element.getText());
    return elements;
  }
}

module.exports = new MainPage();
