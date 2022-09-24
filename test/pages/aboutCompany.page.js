const BasePage = require("./base.page.js");

class AboutCompanyPage extends BasePage {
  get emailAddress() {
    return $('.//p[contains(text(), "E-mail")]');
  }

  get phoneNumbers() {
    return $('.//p[contains(text(), "Телефоны")]');
  }

  get youtubeButton() {
    return $('.//a[@title= "Youtube"]');
  }
}

module.exports = new AboutCompanyPage();
