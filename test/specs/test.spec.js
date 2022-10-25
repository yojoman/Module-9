const mainPage = require("../pages/main.page");
const productPage = require("../pages/product.page");
const searchPage = require("../pages/search.page");
const resources = require("../resources/data.js");
const { expect, assert } = require("chai");

describe("Onliner.by", () => {
  before(async () => {
    await browser.maximizeWindow();
  });

  it("Should open main page", async () => {
    await mainPage.openPage();
    expect(await mainPage.getTitle()).to.equal("Onliner");
  });

  it("Main page should contain correct header info", async () => {
    const headerActualValue = await mainPage.getHeaderMenuText();
    assert.sameMembers(
      resources.headerExpectedValue,
      headerActualValue,
      "Main page contain incorrect header values"
    );
  });

  it("Main page should contain correct footer info", async () => {
    const footerActualValue = await mainPage.getFooterMenuText();
    assert.sameMembers(
      resources.footerExpectedValue,
      footerActualValue,
      "Main page contain incorrect footer values"
    );
  });

  it("Should open searched item page", async () => {
    await searchPage.typeInSearhField(
      "iPhone 14 Pro Max 256GB (космический черный)"
    );
    await searchPage.openItemFromSearchField(1);
    expect(await searchPage.getTitle()).to.include(
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
    expect(await productPage.productImage.isDisplayed()).to.equal(true);
  });

  it("Should open Discuss on forum page", async () => {
    await productPage.clickOnButton("Обсуждение на форуме");
    await productPage.waitForElementDisplayed(
      productPage.getForumTitleText("Смартфон Apple iPhone 14")
    );
    expect(
      await productPage
        .getForumTitleText("Смартфон Apple iPhone 14")
        .isDisplayed()
    ).to.equal(true);
    await productPage.back();
  });

  it("Should open Offers page by using actionsPerform", async () => {
    await productPage.clickOnOffersButton("Предложения продавцов");
    await productPage.waitForElementDisplayed(
      productPage.getProductTitleText(
        "iPhone 14 Pro Max 256GB (космический черный)"
      )
    );
    expect(
      await productPage
        .getProductTitleText("iPhone 14 Pro Max 256GB (космический черный)")
        .isDisplayed()
    ).to.equal(true);
  });

  it("Should open Adverts page by using JSexecutor", async () => {
    await productPage.scrollAndClickOntoOffer();
    await productPage.waitForElementDisplayed(
      productPage.getCartTitleText("Товар добавлен в корзину")
    );
    expect(
      await productPage
        .getCartTitleText("Товар добавлен в корзину")
        .isDisplayed()
    ).to.equal(true);
  });
});
