const { Given, When, Then } = require('@cucumber/cucumber');

const Homepage = require('../pageobjects/home.page');
const Searchpage = require('../pageobjects/search.page');

const pages = {
    login: Homepage
}


/// Start of the steps

Given(/^I am on the Desktop or in a mobile device$/, function() {
    // Fallthrough
})


When(/^I navigate to the Homepage$/, ()=> {
    Homepage.open()
})


Then(/^I should see a (.*) section$/, (fieldname) => {
    Homepage.validate(fieldname)
   // expect(Homepage.inputSearch).tobeExisting();
})

When (/^I search with a text (.*)$/, (searchtext) => {
    Homepage.search(searchtext)
})

When (/^I click the (.*) button$/, (buttonname) => {
    Homepage.clickButton(buttonname)
})


Then(/^I should see some search results$/, () => {
    Homepage.searchResults()
})


Then(/^I should see a flash message saying (.*)$/, (message) => {
    expect(Searchpage.flashAlert).toBeExisting();
    expect(Searchpage.flashAlert).toHaveTextContaining(message);
})


;