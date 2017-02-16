$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Hotel/Hotel.feature");
formatter.feature({
  "line": 4,
  "name": "Hotel Features",
  "description": "",
  "id": "hotel-features",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 6,
  "name": "Flexible dates Search for market",
  "description": "",
  "id": "hotel-features;flexible-dates-search-for-market",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "User Selects Flexible Date Search",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Select Market - \"Las Vegas\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Select Check-in \u0026 Checkout dates",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Room count \"1\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Guest \"2\" Adults,  \"0\" Children",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Click on Search",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Verify Flex calendar page",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "Select any rate from the table",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Click Select room button from Choose Your Check-out Date overlay",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Selct Room Options",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Select room \u0027Forum Classic Room\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Verify Itinerary Page",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "Continue to Checkout",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Check the room details added to cart as Room \"1\" and Guests \"2\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Remove room",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Update room in cart",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Select room \u0027Forum Classic Room\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Continue to Checkout",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "Verify Payment Page",
  "keyword": "And "
});
formatter.match({
  "location": "HotelStepDefs.userSelectsFlexibleDateSearch()"
});
formatter.result({
  "duration": 22721330528,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Las Vegas",
      "offset": 17
    }
  ],
  "location": "HotelStepDefs.selectMarket(String)"
});
formatter.result({
  "duration": 1514976464,
  "status": "passed"
});
formatter.match({
  "location": "HotelStepDefs.selectCheckInCheckoutDates()"
});
formatter.result({
  "duration": 1631892656,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 12
    }
  ],
  "location": "HotelStepDefs.roomCount(String)"
});
formatter.result({
  "duration": 1124949232,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 7
    },
    {
      "val": "0",
      "offset": 20
    }
  ],
  "location": "HotelStepDefs.guestAdultsChildren(String,String)"
});
formatter.result({
  "duration": 1775356320,
  "status": "passed"
});
formatter.match({
  "location": "HotelStepDefs.clickOnSearch()"
});
formatter.result({
  "duration": 1359144275,
  "status": "passed"
});
formatter.match({
  "location": "HotelStepDefs.verifyFlexCalendarPage()"
});
formatter.result({
  "duration": 8200494921,
  "status": "passed"
});
formatter.match({
  "location": "HotelStepDefs.selectAnyRateFromTheTable()"
});
formatter.result({
  "duration": 1314391288,
  "status": "passed"
});
formatter.match({
  "location": "HotelStepDefs.clickSelectRoomButtonFromChooseYourCheckOutDateOverlay()"
});
formatter.result({
  "duration": 11366993934,
  "status": "passed"
});
formatter.match({
  "location": "HotelStepDefs.selctRoomOptions()"
});
formatter.result({
  "duration": 1618785276,
  "status": "passed"
});
formatter.match({
  "location": "HotelStepDefs.selectRoomForumClassicRoom()"
});
formatter.result({
  "duration": 9270935502,
  "status": "passed"
});
formatter.match({
  "location": "HotelStepDefs.verifyItineraryPage()"
});
formatter.result({
  "duration": 970359680,
  "status": "passed"
});
formatter.match({
  "location": "HotelStepDefs.continueToCheckout()"
});
formatter.result({
  "duration": 1174928761,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 46
    },
    {
      "val": "2",
      "offset": 61
    }
  ],
  "location": "HotelStepDefs.checkTheRoomDetailsAddedToCartAsRoomAndGuests(int,String)"
});
formatter.result({
  "duration": 4331288117,
  "status": "passed"
});
formatter.match({
  "location": "HotelStepDefs.removeRoom()"
});
formatter.result({
  "duration": 8795236872,
  "status": "passed"
});
formatter.match({
  "location": "HotelStepDefs.updateRoomInCart()"
});
formatter.result({
  "duration": 1488458531,
  "status": "passed"
});
formatter.match({
  "location": "HotelStepDefs.selectRoomForumClassicRoom()"
});
formatter.result({
  "duration": 8869912839,
  "status": "passed"
});
formatter.match({
  "location": "HotelStepDefs.continueToCheckout()"
});
formatter.result({
  "duration": 1321622296,
  "status": "passed"
});
formatter.match({
  "location": "HotelStepDefs.verifyPaymentPage()"
});
formatter.result({
  "duration": 3857994764,
  "status": "passed"
});
formatter.after({
  "duration": 10480368877,
  "status": "passed"
});
formatter.uri("Hotel/Hotelfunctionalities.feature");
formatter.feature({
  "line": 1,
  "name": "Exact Date Market Search",
  "description": "",
  "id": "exact-date-market-search",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Market Search",
  "description": "",
  "id": "exact-date-market-search;market-search",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "User is in landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Select Market - \"Las Vegas\"",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "User enter Checkin \u0026 Checkout dates",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Room count \"2\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Guest \"2\" Adults,  \"0\" Children",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User enters promotion",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Click on Search",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User verify Market Listing Page",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User select Property  Flamingo Las Vegas",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User  verify Room Listing Page",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User select accessibility filter",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User select Room",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 17,
      "value": "#   And  Verify Itinerary Page"
    },
    {
      "line": 18,
      "value": "#   And  User navigate to Dining, Reserve a Table -\u003e On Hold, need to implement button functionality in Find a Table page"
    }
  ],
  "line": 19,
  "name": "User verify Trip Summary Page",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 20,
      "value": "#   And  User remove room from cart-----------\u003e Need to add button functionality to capture this event in itinerary page"
    }
  ],
  "line": 21,
  "name": "User adds BoB Voucher to cart",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 22,
      "value": "#   And  User upgrade room in cart"
    }
  ],
  "line": 23,
  "name": "User click on continue to Checkout",
  "keyword": "And "
});
formatter.match({
  "location": "MarketSearch.userIsInLandingPage()"
});
