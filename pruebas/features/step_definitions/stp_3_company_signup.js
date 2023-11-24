const { Given, When, Then } = require('@cucumber/cucumber');
const {After, Before} = require('@cucumber/cucumber');
const { Builder, By, Capabilities, Key } = require('selenium-webdriver');
const { expect } = require('chai')


When('I click on company',{timeout: 60000}, async function(){
    await this.driver.findElement(By.xpath('/html/body/div/main/div/div/div/div[1]/a')).click();

});

Then('I sign up as company', {timeout: 60000}, async function (){
    
    await this.driver.manage().setTimeouts({ implicit: 10000 });
    await this.driver.findElement(By.xpath('//*[@id="root"]/main/div/form/div[3]/div/a')).click()
    await this.driver.sleep(1000);
    const email = await this.driver.findElement(By.name('email'))
    await clearf(this.driver, email);
    await this.driver.sleep(1000);
    await email.sendKeys(this.email);
    const password = await this.driver.findElement(By.name('password'));
    await clearf(this.driver, password);
    await this.driver.sleep(1000);
    await password.sendKeys(this.password);
    await this.driver.findElement(By.xpath('//*[@id="root"]/main/div/form/button')).click();
    await this.driver.sleep(1000);
    const current_url = await this.driver.getCurrentUrl();
    expect(current_url).to.include('dashboard');
    await this.driver.findElement(By.xpath('//*[@id="root"]/div/header/div/div/button[4]')).click();
    await this.driver.sleep(2000);
});


const clearf = async function clear(drv, web_elt) {
    await drv.executeScript(elt => elt.select(), web_elt);
    await web_elt.sendKeys(Key.BACK_SPACE);
};