const Page = require('../page');

class AMillionMorePage extends Page 
{
    open () {
        return super.open('intl/v/car-safety/a-million-more');
    }

    get watchTheStoryButton () { return $('//div[@data-component="Video"]//button[text()="watch the story"]') };
    async watchTheStory() {
        await (await this.watchTheStoryButton).click();
    }

    get MoviePlayer() { return new MoviePlayer(); }

    get ProductListCarousel() { return new ProductList(); }

    get introSection() { return $('//*[@data-autoid="ModelIntro"]') }
    
}

class MoviePlayer extends Page 
{
    get iFrame () { return $('//*[@id="Video-1"]/section/div/iframe') }

    get container () { return $('//*[@id="player"]') }

    async waitForDisplayed(isDisplayed) {
        await super.waitForDisplayed(await this.container, isDisplayed);
    }

    get playPauseButton () { return $('.ytp-play-button') };
    get currentTime () { return $('.ytp-time-current') };
}

class ProductList extends Page 
{
    get container () { return $('//*[@id="ProductListCarousel-1"]') }

    get nextButton () { return $('//button[@data-autoid="springCarouselNextButton"]') }

    async scrollIntoView() {
        await (await this.container).scrollIntoView();
    }

    async waitForDisplayed(isDisplayed) {
        await super.waitForDisplayed(await this.container, isDisplayed);
    }

    async navigate(modelName, rechargeType)
    {
        var modelLink = $('//*[@id="ProductListCarousel-1"]//*[span[contains(text(), "'+modelName+'")]]//*[contains(text(), "'+rechargeType+'")]');
        var modelFound = await (await modelLink).isClickable().then((value) => { return value; });

        if(modelFound)
        {
            await (await modelLink).click();
        }
        else
        {
            throw new Error('"'+modelName+' '+rechargeType+'" model was not found.');
        }        
    }
}

module.exports = new AMillionMorePage();