var { Given, When, Then, After } = require('cucumber');
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;
var EC = protractor.ExpectedConditions;

// Given(/^I go to "([^"]*)"$/, function (site) {

//   return browser.get(site);
// });
var base = require('../Pages/BasePage.js');
var home = require('../Pages/HomePage.js');
var customerLogin = require('../Pages/CustomerLoginPage.js');
var transaction = require('../Pages/TransactionPage.js')

Given(/^I go to "([^"]*)"$/, async (site) => {

  await base.go(site)
});


When(/^I found the title as "([^"]*)"$/, async (title) => {

  browser.wait(EC.titleContains('Protractor practice website'), 5000);
  var actualTitle = base.gettitle();

  await expect(actualTitle).to.eventually.equal(title);
});


When(/^I click the Customer Log In button$/, async () => {


  browser.wait(EC.elementToBeClickable(home.elementsHomePage.CustomerLoginButton), 5000)
  await home.goToCustomerLogin();

});

When(/^I select the the value as "([^"]*)" from the customer list$/, async (name) => {

  browser.wait(EC.elementToBeClickable(customerLogin.elementsCustomerLoginPage.HarryPotter));

  await customerLogin.elementsCustomerLoginPage.NameDropdown.click();
  await customerLogin.elementsCustomerLoginPage.HarryPotter.click();


});



When(/^click Login button$/, function () {
  browser.wait(EC.elementToBeClickable(customerLogin.elementsCustomerLoginPage.loginButton),5000);
  return customerLogin.elementsCustomerLoginPage.loginButton.click();
});



Then(/^Welcome page should show "([^"]*)"$/, function (message) {

  browser.wait(EC.textToBePresentInElement(transaction.elementsHomePage.WelcomeMessage), 5000);
  var actualtitle = transaction.elementsHomePage.WelcomeMessage.getText();
  actualtitle.then(function (actualtitle) {

    return expect(actualtitle).to.eventually.equal(message)
  })
});;





// Given(/^I go to "([^"]*)"$/, function (site) {

//   return browser.get(site);
// });

// When(/^I found the title as "([^"]*)"$/, function (title) {

// var actualTitle = browser.getTitle();
// return expect(actualTitle).to.eventually.equal(title);
// });

// After(function(scenarioResult) {
//   let self = this;

//   if(scenarioResult.result.status === 'failed'){
// return browser.takeScreenshot()
// .then(function (screenshot) {
//     const decodedImage = new Buffer(screenshot.replace(/^data:image\/png;base64,/, ''), 'base64');
//       self.attach(decodedImage, 'image/png');
//       console.log("scenarioResult  = ",scenarioResult.result.status);
//   });
//   }
// });
