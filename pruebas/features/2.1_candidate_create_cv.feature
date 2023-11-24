Feature: Creating cv candidate
    Creating candidate cv

    Scenario: Creating cv
        Given I am on the app start page
        When I click on candidate
        Then I sign up as candidate
        Then I sign in to the account
        Then I fill in the form