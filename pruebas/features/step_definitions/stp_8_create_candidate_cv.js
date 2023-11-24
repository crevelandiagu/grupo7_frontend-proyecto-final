const { Given, When, Then } = require('@cucumber/cucumber');
const {After, Before} = require('@cucumber/cucumber');
const { Builder, By, Capabilities, Key } = require('selenium-webdriver');
const { expect } = require('chai')
const {faker} = require('@faker-js/faker');


Then('I fill in the form', {timeout: 60000}, async function (){
    
    //Basic info
    await this.driver.findElement(By.xpath('//*[@id="root"]/div/nav/div/div/ul/div[2]/div/div/div[1]/div/div[2]/span')).click();
    await this.driver.findElement(By.name('name')).sendKeys(this.candidatename);
    await this.driver.findElement(By.name('lastName')).sendKeys(this.candidatelastname);
    await this.driver.findElement(By.name('numberId')).sendKeys(this.candidateid);
    await this.driver.findElement(By.name('location')).sendKeys(this.candidatelocation);
    await this.driver.findElement(By.name('phone')).sendKeys(this.candidatetel);
    await this.driver.sleep(1000);
    await this.driver.findElement(By.xpath('//*[@id="root"]/div/main/main/div/form/button')).click();
    await this.driver.sleep(1000);

    //Experience 
    await this.driver.findElement(By.xpath('//*[@id="root"]/div/nav/div/div/ul/div[2]/div/div/div[2]/div/div[2]/span')).click();
    await this.driver.findElement(By.name('position')).sendKeys(this.candidateposition);
    await this.driver.findElement(By.name('company')).sendKeys(this.candidatecompany);
    await this.driver.findElement(By.name('startDate')).sendKeys(this.candidateexperience);
    await this.driver.findElement(By.name('endDate')).sendKeys(this.candidateexperience);
    await this.driver.findElement(By.name('location')).sendKeys(this.candidatelocation);
    await this.driver.sleep(1000);
    await this.driver.findElement(By.xpath('//*[@id="root"]/div/main/main/div/form/button')).click();
    await this.driver.sleep(1000);

    //Education
    await this.driver.findElement(By.xpath('//*[@id="root"]/div/nav/div/div/ul/div[2]/div/div/div[3]/div/div[2]/span')).click();
    await this.driver.findElement(By.name('school')).sendKeys(this.candidateschool);
    await this.driver.findElement(By.name('degree')).sendKeys(this.candidatedegree);
    await this.driver.findElement(By.name('startDate')).sendKeys(this.candidateexperience);
    console.log(this.candidateexperience);
    await this.driver.findElement(By.name('endDate')).sendKeys(this.candidateexperience);
    await this.driver.findElement(By.name('location')).sendKeys(this.candidatelocation);
    await this.driver.sleep(1000);
    await this.driver.findElement(By.xpath('//*[@id="root"]/div/main/main/div/form/button')).click();
    await this.driver.sleep(1000);

    //Certificate
    await this.driver.findElement(By.xpath('//*[@id="root"]/div/nav/div/div/ul/div[2]/div/div/div[4]/div/div[2]/span')).click();
    await this.driver.findElement(By.name('certification')).sendKeys(this.candidatecertificate);
    await this.driver.findElement(By.name('issuingOrganization')).sendKeys(this.candidatecertorg);
    await this.driver.findElement(By.name('startDate')).sendKeys(this.candidateexperience);
    await this.driver.findElement(By.name('endDate')).sendKeys(this.candidateexperience);
    await this.driver.sleep(1000);
    await this.driver.findElement(By.xpath('//*[@id="root"]/div/main/main/div/form/button')).click();
    await this.driver.sleep(1000);

});
