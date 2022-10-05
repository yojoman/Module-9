const mainPage = require("../pages/main.page");
const productPage = require("../pages/product.page");
const resources = require("../resources/data.js");
const { expect, assert } = require("chai");

describe("Onliner.by test example", () => {
  before(async () => {
    await browser.maximizeWindow();
  });

  it("Should open main page", async () => {
    await mainPage.openPage();
    expect(await mainPage.getTitle()).to.equal("Onliner");
  });

  it("Main page should contain correct header info", async () => {
    const headerActualValue = await mainPage.getHeaderMenuText();
    assert.sameMembers(resources.headerExpectedValue, headerActualValue);
  });

  it("Main page should contain correct footer info", async () => {
    const footerActualValue = await mainPage.getFooterMenuText();
    assert.sameMembers(resources.footerExpectedValue, footerActualValue);
  });

  it("Should open searched item page", async () => {
    await mainPage.typeInSearhField(
      "iPhone 14 Pro Max 256GB (космический черный)"
    );
    await mainPage.openFirstItemFromSearchField();
    expect(await productPage.getTitle()).to.include(
      "iPhone 14 Pro Max 256GB (космический черный)"
    );
  });

  it("Product page should containt title, image and price", async () => {
    expect(
      await productPage
        .getProductTitleText("iPhone 14 Pro Max 256GB (космический черный)")
        .isDisplayed()
    ).to.equal(true);
    expect(await productPage.priceOfProduct.isDisplayed()).to.equal(true);
    expect(await productPage.productIamge.isDisplayed()).to.equal(true);
  });

  it("Should open Offers page", async () => {
    await productPage.openOffersPage();
    expect(await productPage.offersList.isDisplayed()).to.equal(true);
  });
});
