Feature: Buy any item from the website

 Background:
    Given I have logged as a valid user

    Scenario Outline: Test to validate that user is able to buy any item from the website and checkout successfully  
        Given I add a random item to my cart 
        When I view my cart 
        Then I validate the item listed is correct
        And I am able to checkout successfully 
       
