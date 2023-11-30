Feature: Add employee
    Add an employee account

    Scenario: Add employee
        Given I am on the app start page
        When I click on company
        Then I sign up as company
        Then I sign in to the account
        Then I add an employee account