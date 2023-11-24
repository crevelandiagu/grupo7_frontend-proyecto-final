const { Given, When, Then } = require('@cucumber/cucumber');
const {After, Before} = require('@cucumber/cucumber');
const { Builder, By, Capabilities, Key } = require('selenium-webdriver');
const {Select} = require('selenium-webdriver')
const { expect, assert } = require('chai')


Then('I add an employee account', {timeout: 60000}, async function (){
    
    await this.driver.findElement(By.xpath('//*[@id="root"]/div/nav/div/div/ul/div[3]')).click(); 
    const employeename_btn = await this.driver.findElement(By.name('name'));
    const employeeposition_btn = await this.driver.findElement(By.name('position'));

    await employeename_btn.sendKeys(this.employeename);
    await employeeposition_btn.sendKeys(this.employeeposition);

    await this.driver.findElement(By.xpath('//*[@id="root"]/div/main/main/div/form/button')).click();
    await this.driver.sleep(1000);
});

Then('I assign employee project', {timeout: 60000}, async function (){
    
    await this.driver.findElement(By.xpath('//*[@id="root"]/div/nav/div/div/ul/div[5]')).click();
    await this.driver.sleep(1000);
    const project_drop = await this.driver.findElement(By.id('projects'));
    project_drop.click()
    project_drop.sendKeys(Key.ARROW_DOWN, Key.ENTER);
    
    await this.driver.sleep(1000);
    const employee_drop = await this.driver.findElement(By.id('employees'));
    employee_drop.click()
    employee_drop.sendKeys(Key.ARROW_DOWN, Key.ENTER);
    await this.driver.findElement(By.xpath('//*[@id="root"]/div/main/main/div/form/div/button')).click();
    await this.driver.sleep(1000);
});

Then('I search for a candidate', {timeout: 60000}, async function (){
    
    //Search
    await this.driver.findElement(By.xpath('//*[@id="root"]/div/nav/div/div/ul/div[2]')).click();
    await this.driver.sleep(1000);
    const experience_line = await this.driver.findElement(By.name('experience'));
    experience_line.click()
    experience_line.sendKeys("0");
    await this.driver.findElement(By.xpath('//*[@id="root"]/div/main/main/div[1]/form/button')).click();
    
    const results = await this.driver.findElement(By.xpath('//*[@id="root"]/div/main/main/div[2]/div[2]/div[1]'));
    expect(results).to.not.be.empty;
    await this.driver.findElement(By.xpath('//*[@id="root"]/div/main/main/div[2]/div[2]/div[1]/div[2]/button')).click();

    const project_drop = await this.driver.findElement(By.id('project'));
    project_drop.click()
    project_drop.sendKeys(Key.ARROW_DOWN, Key.ENTER);
    await this.driver.sleep(1000);
    await this.driver.findElement(By.xpath('//*[@id="root"]/div/main/div[2]/div[1]/button')).click();
    await this.driver.sleep(1000);

});

Then('I schedule an interview', {timeout: 60000}, async function (){
    
    //Interview

    await this.driver.findElement(By.xpath('//*[@id="root"]/div/nav/div/div/ul/div[7]')).click();
    await this.driver.sleep(1000);
    const project_interview_drop = await this.driver.findElement(By.id('projects'));
    project_interview_drop.click()
    project_interview_drop.sendKeys(Key.ARROW_DOWN, Key.ENTER);    
    await this.driver.sleep(1000);

    const candidate_drop = await this.driver.findElement(By.id('candidates'));
    candidate_drop.click()
    candidate_drop.sendKeys(Key.ARROW_DOWN, Key.ENTER);
    await this.driver.sleep(1000);

    await this.driver.findElement(By.name('date')).sendKeys(this.candidateinterview);
    await this.driver.findElement(By.name('hour')).sendKeys("08:00 a.m.");
    await this.driver.sleep(1000);

    await this.driver.findElement(By.xpath('//*[@id="root"]/div/main/main/div/form/button')).click();
    await this.driver.sleep(1000);
});