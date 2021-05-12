const Page = require('../page');

class CookiesAlert extends Page 
{
    get container() { return $('//*[@class="optanon-alert-box-bg"]'); }
   
    get acceptButton () { return $('//button[@class="optanon-allow-all accept-cookies-button"]') }

    get cookieSettingsButton () { return $('//button[@class="optanon-toggle-display cookie-settings-button"]') }

    async waitForDisplayed(isDisplayed)
    {
        await super.waitForDisplayed(await this.container, isDisplayed);
    }
    
    async isOpen()
    {
        var isDisplayed = await (await this.container).isDisplayed().then((value) => { return value; });
        return isDisplayed;
    }

    async acceptCookies()
    {
        if (await this.isOpen())
        {
            console.debug("'Cookie Notice' alert is displayed")
            await (await this.acceptButton).click();
        }
        else
        {
            console.debug("'Cookie Notice' alert was not displayed")
        }
    }
}

module.exports = new CookiesAlert();