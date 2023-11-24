Feature: Signing in as candidate
    Login company account

    Scenario: Login company account
        Given I am on the app start page
        When I click on company
        Then I sign up as company
        Then I sign in to the account