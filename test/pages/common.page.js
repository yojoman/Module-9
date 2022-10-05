const BasePage = require("./base.page");

class CommonPage extends BasePage {
  get searchInputField() {
    return $(".//input[@class='fast-search__input']");
  }
}

module.exports = new CommonPage();
