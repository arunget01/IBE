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
  "duration": 32316370374,
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
  "duration": 1771142118,
  "status": "passed"
});
formatter.match({
  "location": "HotelStepDefs.selectCheckInCheckoutDates()"
});
formatter.result({
  "duration": 668771236,
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
  "duration": 165818032,
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
  "duration": 309706084,
  "status": "passed"
});
formatter.match({
  "location": "HotelStepDefs.clickOnSearch()"
});
