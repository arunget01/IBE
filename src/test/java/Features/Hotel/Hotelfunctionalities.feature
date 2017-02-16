Feature:  Exact Date Market Search

  Scenario: Market Search
    Given User is in landing page
    And Select Market - "Las Vegas"
    And  User enter Checkin & Checkout dates
    And Room count "2"
    And Guest "2" Adults,  "0" Children
    And  User enters promotion
    And Click on Search

    And  User verify Market Listing Page
    And  User select Property  Flamingo Las Vegas
    And  User  verify Room Listing Page
    And  User select accessibility filter
    And  User select Room
#   And  Verify Itinerary Page
#   And  User navigate to Dining, Reserve a Table -> On Hold, need to implement button functionality in Find a Table page
    And  User verify Trip Summary Page
#   And  User remove room from cart-----------> Need to add button functionality to capture this event in itinerary page
    And  User adds BoB Voucher to cart
#   And  User upgrade room in cart
    And  User click on continue to Checkout

#    Then User verify the payment page
