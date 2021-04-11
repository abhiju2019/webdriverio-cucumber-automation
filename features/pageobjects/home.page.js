const Page = require('./page');
const baseUrl = 'https://www.bunnings.com.au'

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {
    /**
     * define selectors using getter methods
     */

    get LogoTitle () { return $('#logo-bunnings-warehouse')}
    get inputSearch () { return $('#search-container_container') }
    get btnSubmit () { return $('#search-container_btn-submit') }
    get srchResults () { return $('responsive-search-title-banner-container > div > h1') }


    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        browser.url(baseUrl);
        expect(browser).toHaveTitle('Bunnings Warehouse | Australia\'s DIY, Garden & Hardware Store');

    }

    validate(fieldname) {
        switch (fieldname) {
        case "Search":
            expect(this.inputSearch).tobeExisting();
            break
        }
    }

    search(searchText){
        this.inputSearch.setValue(searchText)

    }

    clickButton(buttonname){
        this.btnSubmit.click(buttonname)
    }


    searchResults(){
        expect(this.srchResults).tobeExisting()
        expect(this.srchResults).toHaveTextContaining("results for")

    }
}

module.exports = new HomePage();
