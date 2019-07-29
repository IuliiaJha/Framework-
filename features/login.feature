# Feature: Login
# In order to perform successful Login
# As a user
# I want to enter correct username and password

#     Scenario: In order to verify login to facebook 

#         Given I go to "https://www.protractortest.org";
#         When I found the title as "Protractor - end-to-end testing for AngularJS 1";

  Feature: Login to production
    In order to perform successful Login
    As a user
    I want to enter correct username and password

    Scenario: In order to verify login to facebook on Production

        Given I go to "http://www.way2automation.com/angularjs-protractor/banking/#/login"
        When I found the title as "Protractor practice website - Banking App"
        When I click the Customer Log In button
        When I select the the value as "Harry Potter" from the customer list 
        When click Login button
        Then Welcome page should show "Harry Potter"

