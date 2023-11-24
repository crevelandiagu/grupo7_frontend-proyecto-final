const { Given, When, Then } = require('@cucumber/cucumber');
const {After, Before} = require('@cucumber/cucumber');
const { Builder, By, Capabilities, Key } = require('selenium-webdriver');
const { expect } = require('chai')
const {faker} = require('@faker-js/faker');


Then('I create the project', {timeout: 60000}, async function (){
    
    await this.driver.findElement(By.xpath('//*[@id="root"]/div/nav/div/div/ul/div[4]')).click();
    const project_btn = await this.driver.findElement(By.name('name'));
    const projectdescription_btn = await this.driver.findElement(By.name('description'));

    await project_btn.sendKeys(this.projectname);
    await projectdescription_btn.sendKeys(this.projectdescription);

    await this.driver.findElement(By.xpath('//*[@id="root"]/div/main/main/div/div/button')).click();
    await this.driver.sleep(1000);
});