


Feature: Hotel Features

#  Scenario: Flexible dates Search for market
#   When User Selects Flexible Date Search
#   And Select Market - "Las Vegas"
#   And  Select Check-in & Checkout dates
#   And Room count "1"
#   And Guest "2" Adults,  "0" Children
#   And Click on Search
#   Then Verify Flex calendar page
#   And  Select any rate from the table
#   And Click Select room button from Choose Your Check-out Date overlay
#   And Selct Room Options
#   And Select room 'Forum Classic Room'
#  Then  Verify Itinerary Page
#  And Continue to Checkout
#   And Check the room details added to cart as Room "1" and Guests "2"
#   And Remove room
#   And  Update room in cart
#   And Select room 'Forum Classic Room'
#   And Continue to Checkout
#  And Verify Payment Page


#
#

 Scenario: Flexible date search for specific property
   When User Selects Flexible Date Search
   And Select Market - "Las Vegas"
   And Select Property "Flamingo Las Vegas"
   And  Select Check-in & Checkout dates
   And Room count "1"
   And Guest "2" Adults,  "0" Children
   And Click on Search
   And Select Dates from the calendar
   And Click on Select Room
#    And Select room Fab Room | 1 King | Non-Smoking
#    And Click on Select
#    And Itinerary Page
#    And Select a room from UPSELL listing
#    And Click on UPGRADE.
#    Then Check whether the room added was upgraded with the new room.
#    Then Check the room details added to cart in Trip summary page.
#    And Continue to Checkout
#      And Verify Payment Page











