const mainPage = require("../pages/main.page");
const aboutCompanyPage = require("../pages/aboutCompany.page");
const catalogPage = require("../pages/catalog.page");
const { expect, assert } = require("chai");

describe("Onliner.by test example", () => {
  before(async () => {
    await browser.maximizeWindow();
  });

  //   after(async () => {
  //     await browser.refresh();
  //     await loginPage.verifyTitle("Proton Account");
  //     await browser.saveScreenshot("testing result.png");
  //   });

  it("Should open main page", async () => {
    await mainPage.openPage();
    expect(await browser.getTitle()).to.equal("Onliner");
  });

  it("Main page should contain correct header menu", async () => {
    const expectedValue = [
      "Каталог",
      "Новости",
      "Автобарахолка",
      "Дома и квартиры",
      "Услуги",
      "Барахолка",
      "Форум",
    ];
    const actualValue = await mainPage.getHeaderMenuText();
    assert.sameMembers(expectedValue, actualValue);
  });

  it("Main page should contain correct footer menu", async () => {
    const expectedValue = [
      "О компании",
      "Контакты редакции",
      "Реклама",
      "Тарифы",
      "Вакансии",
      "Манифест",
      "Пользовательское соглашение",
      "Публичные договоры",
      "Политика конфиденциальности",
      "Поддержка пользователей",
      "Правила возврата",
    ];
    const actualValue = await mainPage.getFooterMenuText();
    assert.sameMembers(expectedValue, actualValue);
  });

  it("Should open 'О компании' page", async () => {
    await aboutCompanyPage.getButton("компании").scrollIntoView();
    // переместитm getbutton v main
    await aboutCompanyPage.getButton("компании").click();
    expect(await browser.getTitle()).to.equal("О сайте");
  });

  it("'О компании' page should contain contact info", async () => {
    await aboutCompanyPage.phoneNumbers.scrollIntoView();
    expect(await aboutCompanyPage.phoneNumbers.isDisplayed()).to.equal(true);
    expect(await aboutCompanyPage.emailAddress.isDisplayed()).to.equal(true);
  });

  it("Should open youtube channel of onliner.by", async () => {
    await aboutCompanyPage.youtubeButton.scrollIntoView();
    await aboutCompanyPage.youtubeButton.click();
    expect(await browser.getTitle()).to.equal("Onliner - YouTube");
  });

  it("Should open new tab of onliner.by", async () => {
    await browser.createWindow("tab");
    await browser.switchWindow("about:blank");
    await browser.url("https://www.onliner.by/");
    expect(await browser.getTitle()).to.equal("Onliner");
  });

  it("Should open Catalog page", async () => {
    await mainPage.catalogMenuButton.waitForDisplayed();
    await mainPage.catalogMenuButton.click();
    await catalogPage.catalogPageTitle.waitForDisplayed();
    expect(await catalogPage.catalogPageTitle.isDisplayed()).to.equal(true);
  });

  it("Should open Elektronika frame", async () => {
    await catalogPage.elektronikaPageButton.click();
    expect(await catalogPage.catalogBody.isDisplayed()).to.equal(true);
  });

  it("Should open Smartfoni page", async () => {
    await catalogPage.mobilnieTelefoniFrameButton.click();
    await catalogPage.smartfoniFrameButton.waitForDisplayed();
    await catalogPage.smartfoniFrameButton.click();
    expect(await catalogPage.smartfoniPageTitle.isDisplayed()).to.equal(true);
    await browser.pause(1000);
  });
});
