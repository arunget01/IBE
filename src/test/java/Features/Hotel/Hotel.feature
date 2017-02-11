Feature:
  Hotel Features

  Scenario : Exact Date Search for Market
    When Select accessibilty filter.
    And Select Room "Go Room | 1 King | Non-Smoking"
    Then Verify Itinerary Page
    And  Navigate to Dining, Reserve a Table -> Add a restaurant
    And  Continue to Checkout
    Then Verify Trip Summary Page
    And  Check the room details added to cart.
    And Remove room from cart
    And Update room in cart
    And Continue to Checkout
    Then Verify Payment Page
    Then  Check whether the 'check-in time' related label on the payment page is updated with the text box as 'Select your estimated time of arrival' & display the updated text message.
    And Fill Up the Guest Details
    Then







