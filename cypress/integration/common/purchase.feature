Feature: Saucedemo E2E Test
    
    Scenario: Testing the purchase flow via the saucedemo page
        Given User navigates to the saucedemo page
        And User signs in using the standard account
        Then User is redirected to the products page and views the list of items
	When User sorts the listed items from high to low
	And User adds to basket the low priced & high priced items to basket
	And User selects the basket icon
        Then User is redirected to the cart page and clicks checkout
        And user enter personal details and clicks finish to complete the purchase
        And User sees the successful purchase message

    



