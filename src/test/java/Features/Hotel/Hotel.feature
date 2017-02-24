


Feature: Hotel Features

  Scenario Outline: Flexible dates Search for market
    Given User tests in given <browsers>
    Given User opens given <urls>
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
    And User close browser
    Examples:
      |urls|browsers|
      |urlroomavailfalse|chrome|
      |urlroomavailtrue|chrome|


 Scenario Outline: Flexible date search for specific property
   Given User tests in given <browsers>
   Given User opens given <urls>
   When User Selects Flexible Date Search
   And Select Market - "Las Vegas"
   And Select Property "Flamingo Las Vegas"
   And  Select Check-in & Checkout dates
   And Room count "1"
   And Guest "2" Adults,  "0" Children
   And Click on Search
   And Verify flex property listing page
   And Select Dates from the calendar
   And Click on Select Room
   And Selct Room Options
   And Select room Fab Room  1 King  Non-Smoking
   Then  Verify Itinerary Page
   And Select a room from UPSELL listing and click Upgrade
   Then Check whether the room added was upgraded with the new room
   And Continue to Checkout
   And Check the room details added to cart as Room "1" and Guests "2"
   And Verify Payment Page
   And User close browser

   Examples:
     |urls|browsers|
     |urlroomavailfalse|chrome|
     |urlroomavailtrue|chrome|


Scenario Outline: Multi Room Search

Given User tests in given <browsers>
Given User opens given <urls>
  And Select Market - "Las Vegas"
  And Select Property "Flamingo Las Vegas"
  And  User enter Checkin & Checkout dates
  And Room count "2"
  And Guest "2" Adults,  "1" Children
  And Click on Search
  And  User  verify Room Listing Page
  #And  User select accessibility filter
  And  User select Room
  Then  Verify Itinerary Page
  And Continue to Checkout
  And Check the room details added to cart as Room "2" and Guests "2"
  And  Verify Cart has "2" room
  And Verify Payment Page
  And User close browser
#
  Examples:
    |urls|browsers|
    |urlroomavailfalse|firefox|
    |urlroomavailtrue|chrome|




##Scenario: HR Voucher - Las Vegas
##  Given Open "urlhr" enableshow=hr
##  And Select Tickets
##  Then Verify High roller in Listing page
##And Select and continue to 'Find Tickets'
##And Select TicketType, multiple tickets for passengers, date and continue
##And Add High roller to trip and continue to checkout
##And Continue to payment and fill guest details
##And Verify Payment page of HR




