Feature: Hotel Features
#
#  Scenario Outline: Flexible dates Search for market
#    Given User tests in given <browsers>
#    Given User opens given <urls>
#    When User Selects Flexible Date Search
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
#   Then  Verify Itinerary Page
#   And Continue to Checkout
#   And Check the room details added to cart as Room "1" and Guests "2"
#   And Remove room
#   And  Update room in cart
#   And Select room 'Forum Classic Room'
#   And Continue to Checkout
#   And Verify Payment Page
#    And User close browser
#    Examples:
#      |urls|browsers|
#      |urlroomavailfalse|chrome|
#      |urlroomavailtrue|chrome|
#
#
# Scenario Outline: Flexible date search for specific property
#   Given User tests in given <browsers>
#   Given User opens given <urls>
#   When User Selects Flexible Date Search
#   And Select Market - "Las Vegas"
#   And Select Property "Flamingo Las Vegas"
#   And  Select Check-in & Checkout dates
#   And Room count "1"
#   And Guest "2" Adults,  "0" Children
#   And Click on Search
#   And Verify flex property listing page
#   And Select Dates from the calendar
#   And Click on Select Room
#   And Selct Room Options
#   And Select room Fab Room  1 King  Non-Smoking
#   Then  Verify Itinerary Page
#   And Select a room from UPSELL listing and click Upgrade
#   Then Check whether the room added was upgraded with the new room
#   And Continue to Checkout
#   And Check the room details added to cart as Room "1" and Guests "2"
#   And Verify Payment Page
#   And User close browser
#
#   Examples:
#     |urls|browsers|
#     |urlroomavailfalse|chrome|
#     |urlroomavailtrue|chrome|

#
#
#Scenario Outline: Multi Room Search
#

#Given User tests in given <browsers>
#Given User opens given <urls>
#  And Select Market - "Las Vegas"
#  And Select Property "Flamingo Las Vegas"
#  And  User enter Checkin & Checkout dates
#  And Room count "2"
#  And Guest "2" Adults,  "1" Children
#  And Click on Search
#  And  User  verify Room Listing Page
#  And  User select accessibility filter
#  And  User select Room
#  Then  Verify Itinerary Page
#  And Continue to Checkout
#  And Check the room details added to cart as Room "2" and Guests "2"
#  And  Verify Cart has "2" room
#  And Verify Payment Page
#  And User close browser
#
#  Examples:
#    |urls|browsers|
#    |urlroomavailfalse|chrome|
#    |urlroomavailtrue|chrome|




##Scenario Outline: Non refundable = TRUE
#
#  Given User tests in given <browsers>
#  Given User opens given <urls>
#  And Select Market - "Las Vegas"
#  And Select Property "Flamingo Las Vegas"
#  And  User enter Checkin & Checkout dates
#  And Room count "1"
#  And Guest "2" Adults,  "0" Children
#  And Click on Search
#  Then  Check whether user able to see the Refundable and Non Refundable rates in the listing page
#  Then Check whether user able to view the ratings and review details for all properties from the list
##  Then Check whether user able to view & acccess the room details link
##  Then Check whether user able to View Total Hyperlink
#
#  And Selct Room Options
#  And Select any Room
#  Then  Verify Itinerary Page
# # And Select a room from UPSELL listing and click Upgrade
# # Then Check whether the room added was upgraded with the new room
# #Reserve a Table -> Add a restaurant
#  And Continue to Checkout
#  And Check the room details added to cart as Room "1" and Guests "2"
#  And Verify Payment Page
#  And User close browser
#
#  Examples:
#    |urls|browsers|
#    |urlnonrefundabletrue|chrome|