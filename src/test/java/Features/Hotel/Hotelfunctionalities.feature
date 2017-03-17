Feature:  Exact Date Market Search
#
    Scenario Outline: Market Search
    Given User tests in given <browsers>
    Given User opens given <urls>
    And Select Market - "Las Vegas"
    And  User enter Checkin & Checkout dates
    And  Room count "2"
    And  Guest "2" Adults,  "0" Children
    And  User enters promotion
    And  Click on Search
    And  User verify Market Listing Page
    And  User select Property  Flamingo Las Vegas
    And  User  verify Room Listing Page
    And  User select accessibility filter
    And  User select Room
# #  And  Verify Itinerary Page
# #  And  User navigate to Dining, Reserve a Table -> On Hold, need to implement button functionality in Find a Table page
#    And  User verify Trip Summary Page
# #  And  User remove room from cart-----------> Need to add button functionality to capture this event in itinerary page
# #  And  User adds BoB Voucher to cart
# #  And  User upgrade room in cart
    And  User click on continue to Checkout
    Then User verify the payment page
    And User close browser
    Examples:
      | urls              | browsers |
      | urlroomavailfalse | chrome   |
####     |urlroomavailtrue|chrome|
#
#
  Scenario Outline: Property Search- Exact Date Property Search
    Given User tests in given <browsers>
    Given User opens given <urls>
    And Select Market - "Las Vegas"
    And Select Property "Flamingo Las Vegas"
    And  User enter Checkin & Checkout dates
    And Room count "2"
    And Guest "2" Adults,  "0" Children
    And  User enters promotion
    And Click on Search
    And  User  verify Room Listing Page
    And  User select room filters
    And  User select accessibility filter
    And  User select Room
    And  User verify Trip Summary Page
##   And  User add restaurant to cart
    And  User verify Trip Summary Page

##   And  User remove room from cart
##   And  User adds BoB Voucher to cart
##   And  User upgrade room in cart
    And  User click on continue to Checkout
    Then User verify the payment page
    And User close browser
    Examples:
      | urls              | browsers |
      | urlroomavailfalse | chrome   |
###   |urlroomavailtrue|chrome|
##
##
#
  Scenario Outline: Room Type Calendar search- Flexible date search for specific property Search (Room Type Calendar)
    Given User tests in given <browsers>
    Given User opens given <urls>
    When User Select Flexible Date Search
    And Select Market - "Las Vegas"
    And Select Property "Flamingo Las Vegas"
    And  User select the Month
    And Room count "1"
    And Guest "2" Adults,  "0" Children
    And  User enters promotion
    And Click on Search
#    And  Verify whether the Deal applied banner is shown in Rate Calendar page
    And  User select Dates from the calendar
    And  User click on Get Trip price button
    And  User click on Book it from pricing details overlay
#    And  User verify Trip Summary Page
#    And  User adds BoB Voucher to cart
    And  User click on continue to Checkout
    Then User verify the payment page
    And User close browser
    Examples:
      | urls              | browsers |
      | urlroomavailfalse | chrome   |
####   |urlroomavailtrue|chrome|
#
#
#
    Scenario Outline:  TR Offer User search
    Given User tests in given <browsers>
    Given User opens given <urls>
    And  User clicks on TR user login button
    And  User enters TR user user name and password
    And  User clicks on siginin button in login pop
    And  User navigates to myoffers page
    And  User selects property from myoffers page
    And  User click on check availability button
    And  User select offer applied date from ratecalendar page
    And  User click on trip price overlay
    And  User click on Book it from pricing details overlay
    And  User verify Trip Summary Page
    And  User click on continue to Checkout
    Then User verify the payment page
    Examples:
      | urls              | browsers |
      | urlroomavailfalse | chrome   |



  Scenario Outline: HR Voucher Search
    Given User tests in given <browsers>
    Given Open "urlhr" enableshow=hr
    And User proceed to HRlanding page
    And User select checkin and checkout date
    And Click on Search from HRlanding page
    And User click on Find ticket from HR listing page
    And User proceed to HRticketselection page
    And User click on Findtickets to proceed to itierary page
    Examples:
      | urls              | browsers |
      | urlroomavailfalse | chrome   |
