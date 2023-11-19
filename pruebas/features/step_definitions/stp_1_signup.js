const { Given, When, Then } = require('@cucumber/cucumber');
const {After, Before} = require('@cucumber/cucumber');
const { Builder, By, Capabilities, Key } = require('selenium-webdriver');
const { expect } = require('chai')

//driver = new Builder().forBrowser('chrome').build();

Before(async function() {
   this.driver = new Builder().forBrowser('chrome').build();
   await this.driver.manage().setTimeouts({ implicit: 1000 });
  })
  
  After(async function() {
    await this.driver.quit();
  });
  

Given('I am on the app start page',{timeout: 60000}, async function (){
    await this.driver.get('http://localhost:8080/');
});

When('I click on candidate',{timeout: 60000}, async function(){
    await this.driver.findElement(By.xpath('//*[@id="root"]/main/div/div/div/div[2]/a')).click();

});

Then('I sign up as candidate', {timeout: 60000}, async function (){
    
    await this.driver.manage().setTimeouts({ implicit: 10000 });
    await this.driver.findElement(By.xpath('//*[@id="root"]/main/div/form/div[3]/div/a')).click()
    await this.driver.sleep(5000);
    const email = await this.driver.findElement(By.name('email'))
    await clearf(this.driver, email);
    await this.driver.sleep(1000);
    await email.sendKeys('nombre.apellido1@gmail.com');
    const password = await this.driver.findElement(By.name('password'));
    await clearf(this.driver, password);
    await this.driver.sleep(1000);
    await password.sendKeys('Password12#$');
    await this.driver.findElement(By.xpath('//*[@id="root"]/main/div/form/button')).click();
    const current_url = await this.driver.getCurrentUrl();
    await this.driver.sleep(10000);
    expect(current_url).to.include('dashboard');
    await this.driver.sleep(2000);
});


const clearf = async function clear(drv, web_elt) {
    await drv.executeScript(elt => elt.select(), web_elt);
    await web_elt.sendKeys(Key.BACK_SPACE);
};