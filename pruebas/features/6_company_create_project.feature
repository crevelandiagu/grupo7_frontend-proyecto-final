Feature: Create project
    Create account project

    Scenario: Project creation
        Given I am on the app start page
        When I click on company
        Then I sign up as company
        Then I sign in to the account
        Then I create the project