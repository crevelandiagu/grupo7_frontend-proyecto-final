Feature: Signing in as candidate
    Login candidate account

    Scenario: Login account
        Given I am on the app start page
        When I click on candidate
        Then I sign up as candidate
        Then I sign in to the account