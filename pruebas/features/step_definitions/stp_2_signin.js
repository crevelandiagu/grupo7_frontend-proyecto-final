const { Given, When, Then } = require('@cucumber/cucumber');
const { Builder, By, Capabilities, Key } = require('selenium-webdriver');
const { expect } = require('chai')
import { clearf } from './stp_1_signup';

Then('I sign in as candidate', {timeout: 60000}, async function (){
    
    await this.driver.manage().setTimeouts({ implicit: 10000 });
    const email = await this.driver.findElement(By.name('email'))
    await clearf(this.driver, email);
    await this.driver.sleep(1000);
    await email.sendKeys('nombre.apellido@dominio.com');
    const password = await this.driver.findElement(By.name('password'));
    await clearf(this.driver, password);
    await this.driver.sleep(1000);
    await password.sendKeys('password');
    await this.driver.findElement(By.xpath('//*[@id="root"]/main/div/form/button')).click();
    const current_url = await this.driver.getCurrentUrl();
    
    expect(current_url).to.include('dashboard');
    await this.driver.sleep(2000);
});

