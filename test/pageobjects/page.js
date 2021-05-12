/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
module.exports = class Page {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    open (path) {
        return browser.url(`https://www.volvocars.com/${path}`)
    }

    async waitForDisplayed(container, isDisplayed)
    {
        await container.waitUntil(
            async function(){
                var isDisplayedActual = await this.isDisplayed().then((value) => { return value; });
                return isDisplayedActual === isDisplayed;
            }, {
            timeout: 3000,
            timeoutMsg: 'Page container is '+(isDisplayed ? 'NOT ':'')+'displayed'
            });
    }
}
