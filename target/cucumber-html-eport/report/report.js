$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Hotel/Hotel.feature");
formatter.feature({
  "line": 1,
  "name": "Hotel Features",
  "description": "",
  "id": "hotel-features",
  "keyword": "Feature"
});
formatter.uri("Hotel/Hotelfunctionalities.feature");
formatter.feature({
  "line": 1,
  "name": "Exact Date Market Search",
  "description": "",
  "id": "exact-date-market-search",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Market Search",
  "description": "",
  "id": "exact-date-market-search;market-search",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User tests in given \u003cbrowsers\u003e",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User opens given \u003curls\u003e",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Select Market - \"Las Vegas\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User enter Checkin \u0026 Checkout dates",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Room count \"2\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Guest \"2\" Adults,  \"0\" Children",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User enters promotion",
  "keyword": "And "
});
formatter.step({
  "line": 11,
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
      "value": "# #  And  Verify Itinerary Page"
    },
    {
      "line": 18,
      "value": "# #  And  User navigate to Dining, Reserve a Table -\u003e On Hold, need to implement button functionality in Find a Table page"
    },
    {
      "line": 19,
      "value": "#    And  User verify Trip Summary Page"
    },
    {
      "line": 20,
      "value": "# #  And  User remove room from cart-----------\u003e Need to add button functionality to capture this event in itinerary page"
    },
    {
      "line": 21,
      "value": "# #  And  User adds BoB Voucher to cart"
    },
    {
      "line": 22,
      "value": "# #  And  User upgrade room in cart"
    }
  ],
  "line": 23,
  "name": "User click on continue to Checkout",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "User verify the payment page",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "User close browser",
  "keyword": "And "
});
formatter.examples({
  "line": 26,
  "name": "",
  "description": "",
  "id": "exact-date-market-search;market-search;",
  "rows": [
    {
      "cells": [
        "urls",
        "browsers"
      ],
      "line": 27,
      "id": "exact-date-market-search;market-search;;1"
    },
    {
      "cells": [
        "urlroomavailfalse",
        "chrome"
      ],
      "line": 28,
      "id": "exact-date-market-search;market-search;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 28,
  "name": "Market Search",
  "description": "",
  "id": "exact-date-market-search;market-search;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User tests in given chrome",
  "matchedColumns": [
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User opens given urlroomavailfalse",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Select Market - \"Las Vegas\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User enter Checkin \u0026 Checkout dates",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Room count \"2\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Guest \"2\" Adults,  \"0\" Children",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User enters promotion",
  "keyword": "And "
});
formatter.step({
  "line": 11,
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
      "value": "# #  And  Verify Itinerary Page"
    },
    {
      "line": 18,
      "value": "# #  And  User navigate to Dining, Reserve a Table -\u003e On Hold, need to implement button functionality in Find a Table page"
    },
    {
      "line": 19,
      "value": "#    And  User verify Trip Summary Page"
    },
    {
      "line": 20,
      "value": "# #  And  User remove room from cart-----------\u003e Need to add button functionality to capture this event in itinerary page"
    },
    {
      "line": 21,
      "value": "# #  And  User adds BoB Voucher to cart"
    },
    {
      "line": 22,
      "value": "# #  And  User upgrade room in cart"
    }
  ],
  "line": 23,
  "name": "User click on continue to Checkout",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "User verify the payment page",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "User close browser",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "chrome",
      "offset": 20
    }
  ],
  "location": "HotelStepDefs.userTestsInGivenBrowsers(String)"
});
formatter.result({
  "duration": 2546237324,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "urlroomavailfalse",
      "offset": 17
    }
  ],
  "location": "HotelStepDefs.userOpensGivenUrls(String)"
});
formatter.result({
  "duration": 7553888772,
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
  "duration": 1136889293,
  "status": "passed"
});
formatter.match({
  "location": "MarketSearch.userEnterCheckinCheckoutDates()"
});
formatter.result({
  "duration": 1027976321,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 12
    }
  ],
  "location": "HotelStepDefs.roomCount(String)"
});
formatter.result({
  "duration": 247787148,
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
  "duration": 1487458805,
  "status": "passed"
});
formatter.match({
  "location": "MarketSearch.userEntersPromotion()"
});
formatter.result({
  "duration": 123246874,
  "status": "passed"
});
formatter.match({
  "location": "HotelStepDefs.clickOnSearch()"
});
formatter.result({
  "duration": 331986569,
  "status": "passed"
});
formatter.match({
  "location": "MarketSearch.userVerifyMarketListingPage()"
});
formatter.result({
  "duration": 4535164429,
  "status": "passed"
});
formatter.match({
  "location": "MarketSearch.userSelectPropertyFlamingoLasVegas()"
});
formatter.result({
  "duration": 1082300223,
  "status": "passed"
});
formatter.match({
  "location": "MarketSearch.userVerifyRoomListingPage()"
});
formatter.result({
  "duration": 4970885430,
  "status": "passed"
});
formatter.match({
  "location": "MarketSearch.userSelectAccessibilityFilter()"
});
formatter.result({
  "duration": 1086564779,
  "status": "passed"
});
formatter.match({
  "location": "MarketSearch.userSelectRoom()"
});
formatter.result({
  "duration": 5804029290,
  "status": "passed"
});
formatter.match({
  "location": "MarketSearch.userClickOnContinueToCheckout()"
});
formatter.result({
  "duration": 140155237,
  "status": "passed"
});
formatter.match({
  "location": "MarketSearch.userVerifyThePaymentPage()"
});
formatter.result({
  "duration": 79453189,
  "status": "passed"
});
formatter.match({
  "location": "HotelStepDefs.userCloseBrowser()"
});
formatter.result({
  "duration": 4030897052,
  "status": "passed"
});
});