

Feature: Hotel Features

  Scenario: Flexible dates Search for market
   When User Selects Flexible Date Search
   And Select Market - "Las Vegas"
   And  Select Check-in & Checkout dates
   And Room count "1"
   And Guest "2" Adults,  "0" Children
   And Click on Search
   Then Verify Flex calendar page
   And  Select any rate from the table
   And Click Select room button from Choose Your Check-out Date overlay
   And Selct Room Options
   And Select room 'Forum Classic Room'
  Then  Verify Itinerary Page
  And Continue to Checkout
   And Check the room details added to cart as Room "1" and Guests "2"
   And Remove room
   And  Update room in cart
   And Select room 'Forum Classic Room'
   And Continue to Checkout
  And Verify Payment Page











