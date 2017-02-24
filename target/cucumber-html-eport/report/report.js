$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Hotel/Hotel.feature");
formatter.feature({
  "line": 4,
  "name": "Hotel Features",
  "description": "",
  "id": "hotel-features",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 6,
  "name": "Flexible dates Search for market",
  "description": "",
  "id": "hotel-features;flexible-dates-search-for-market",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "User tests in given \u003cbrowsers\u003e",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "User opens given \u003curls\u003e",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "User Selects Flexible Date Search",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "Select Market - \"Las Vegas\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Select Check-in \u0026 Checkout dates",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Room count \"1\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Guest \"2\" Adults,  \"0\" Children",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Click on Search",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Verify Flex calendar page",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "Select any rate from the table",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Click Select room button from Choose Your Check-out Date overlay",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Selct Room Options",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Select room \u0027Forum Classic Room\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Verify Itinerary Page",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "Continue to Checkout",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Check the room details added to cart as Room \"1\" and Guests \"2\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Remove room",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Update room in cart",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "Select room \u0027Forum Classic Room\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Continue to Checkout",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Verify Payment Page",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "User close browser",
  "keyword": "And "
});
formatter.examples({
  "line": 29,
  "name": "",
  "description": "",
  "id": "hotel-features;flexible-dates-search-for-market;",
  "rows": [
    {
      "cells": [
        "urls",
        "browsers"
      ],
      "line": 30,
      "id": "hotel-features;flexible-dates-search-for-market;;1"
    },
    {
      "cells": [
        "urlroomavailfalse",
        "chrome"
      ],
      "line": 31,
      "id": "hotel-features;flexible-dates-search-for-market;;2"
    },
    {
      "cells": [
        "urlroomavailtrue",
        "chrome"
      ],
      "line": 32,
      "id": "hotel-features;flexible-dates-search-for-market;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 31,
  "name": "Flexible dates Search for market",
  "description": "",
  "id": "hotel-features;flexible-dates-search-for-market;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "User tests in given chrome",
  "matchedColumns": [
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "User opens given urlroomavailfalse",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "User Selects Flexible Date Search",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "Select Market - \"Las Vegas\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Select Check-in \u0026 Checkout dates",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Room count \"1\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Guest \"2\" Adults,  \"0\" Children",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Click on Search",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Verify Flex calendar page",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "Select any rate from the table",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Click Select room button from Choose Your Check-out Date overlay",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Selct Room Options",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Select room \u0027Forum Classic Room\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Verify Itinerary Page",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "Continue to Checkout",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Check the room details added to cart as Room \"1\" and Guests \"2\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Remove room",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Update room in cart",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "Select room \u0027Forum Classic Room\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Continue to Checkout",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Verify Payment Page",
  "keyword": "And "
});
formatter.step({
  "line": 28,
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
  "duration": 6291129585,
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
  "duration": 15872688673,
  "status": "passed"
});
formatter.match({
  "location": "HotelStepDefs.userSelectsFlexibleDateSearch()"
});
formatter.result({
  "duration": 627844491,
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
  "duration": 730480064,
  "status": "passed"
});
formatter.match({
  "location": "HotelStepDefs.selectCheckInCheckoutDates()"
});
formatter.result({
  "duration": 286656835,
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
  "duration": 145376267,
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
  "duration": 364859201,
  "status": "passed"
});
formatter.match({
  "location": "HotelStepDefs.clickOnSearch()"
});
formatter.result({
  "duration": 530520039,
  "status": "passed"
});
formatter.match({
  "location": "HotelStepDefs.verifyFlexCalendarPage()"
});
formatter.result({
  "duration": 4700140449,
  "status": "passed"
});
formatter.match({
  "location": "HotelStepDefs.selectAnyRateFromTheTable()"
});
formatter.result({
  "duration": 544527633,
  "status": "passed"
});
formatter.match({
  "location": "HotelStepDefs.clickSelectRoomButtonFromChooseYourCheckOutDateOverlay()"
});
formatter.result({
  "duration": 9577804787,
  "status": "passed"
});
formatter.match({
  "location": "HotelStepDefs.selctRoomOptions()"
});
formatter.result({
  "duration": 284440987,
  "status": "passed"
});
formatter.match({
  "location": "HotelStepDefs.selectRoomForumClassicRoom()"
});
formatter.result({
  "duration": 7609234500,
  "status": "passed"
});
formatter.match({
  "location": "HotelStepDefs.verifyItineraryPage()"
});
formatter.result({
  "duration": 182024730,
  "status": "passed"
});
formatter.match({
  "location": "HotelStepDefs.continueToCheckout()"
});
formatter.result({
  "duration": 433767104,
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
  "duration": 5418346379,
  "status": "passed"
});
formatter.match({
  "location": "HotelStepDefs.removeRoom()"
});
formatter.result({
  "duration": 3249841455,
  "status": "passed"
});
formatter.match({
  "location": "HotelStepDefs.updateRoomInCart()"
});
formatter.result({
  "duration": 10471962122,
  "status": "passed"
});
formatter.match({
  "location": "HotelStepDefs.selectRoomForumClassicRoom()"
});
formatter.result({
  "duration": 3125217561,
  "status": "passed"
});
formatter.match({
  "location": "HotelStepDefs.continueToCheckout()"
});
formatter.result({
  "duration": 424024287,
  "status": "passed"
});
formatter.match({
  "location": "HotelStepDefs.verifyPaymentPage()"
});
formatter.result({
  "duration": 1210824272,
  "status": "passed"
});
formatter.match({
  "location": "HotelStepDefs.userCloseBrowser()"
});
formatter.result({
  "duration": 5847455448,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "Flexible dates Search for market",
  "description": "",
  "id": "hotel-features;flexible-dates-search-for-market;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "User tests in given chrome",
  "matchedColumns": [
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "User opens given urlroomavailtrue",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "User Selects Flexible Date Search",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "Select Market - \"Las Vegas\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Select Check-in \u0026 Checkout dates",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Room count \"1\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Guest \"2\" Adults,  \"0\" Children",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Click on Search",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Verify Flex calendar page",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "Select any rate from the table",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Click Select room button from Choose Your Check-out Date overlay",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Selct Room Options",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Select room \u0027Forum Classic Room\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Verify Itinerary Page",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "Continue to Checkout",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Check the room details added to cart as Room \"1\" and Guests \"2\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Remove room",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Update room in cart",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "Select room \u0027Forum Classic Room\u0027",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Continue to Checkout",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Verify Payment Page",
  "keyword": "And "
});
formatter.step({
  "line": 28,
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
  "duration": 2834189530,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "urlroomavailtrue",
      "offset": 17
    }
  ],
  "location": "HotelStepDefs.userOpensGivenUrls(String)"
});
formatter.result({
  "duration": 11265661918,
  "status": "passed"
});
formatter.match({
  "location": "HotelStepDefs.userSelectsFlexibleDateSearch()"
});
formatter.result({
  "duration": 297673953,
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
  "duration": 518581900,
  "status": "passed"
});
formatter.match({
  "location": "HotelStepDefs.selectCheckInCheckoutDates()"
});
formatter.result({
  "duration": 339315907,
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
  "duration": 123135139,
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
  "duration": 259487578,
  "status": "passed"
});
formatter.match({
  "location": "HotelStepDefs.clickOnSearch()"
});
formatter.result({
  "duration": 591073406,
  "status": "passed"
});
formatter.match({
  "location": "HotelStepDefs.verifyFlexCalendarPage()"
});
formatter.result({
  "duration": 5079152554,
  "status": "passed"
});
formatter.match({
  "location": "HotelStepDefs.selectAnyRateFromTheTable()"
});
formatter.result({
  "duration": 362931272,
  "status": "passed"
});
formatter.match({
  "location": "HotelStepDefs.clickSelectRoomButtonFromChooseYourCheckOutDateOverlay()"
});
formatter.result({
  "duration": 7484939040,
  "status": "passed"
});
formatter.match({
  "location": "HotelStepDefs.selctRoomOptions()"
});
formatter.result({
  "duration": 346022332,
  "status": "passed"
});
formatter.match({
  "location": "HotelStepDefs.selectRoomForumClassicRoom()"
});
formatter.result({
  "duration": 4518585681,
  "status": "passed"
});
formatter.match({
  "location": "HotelStepDefs.verifyItineraryPage()"
});
formatter.result({
  "duration": 208606804,
  "status": "passed"
});
formatter.match({
  "location": "HotelStepDefs.continueToCheckout()"
});
formatter.result({
  "duration": 445778167,
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
  "duration": 3422081774,
  "status": "passed"
});
formatter.match({
  "location": "HotelStepDefs.removeRoom()"
});
formatter.result({
  "duration": 3098438859,
  "status": "passed"
});
formatter.match({
  "location": "HotelStepDefs.updateRoomInCart()"
});
formatter.result({
  "duration": 10545017583,
  "status": "passed"
});
formatter.match({
  "location": "HotelStepDefs.selectRoomForumClassicRoom()"
});
formatter.result({
  "duration": 4591458560,
  "status": "passed"
});
formatter.match({
  "location": "HotelStepDefs.continueToCheckout()"
});
formatter.result({
  "duration": 235675045,
  "status": "passed"
});
formatter.match({
  "location": "HotelStepDefs.verifyPaymentPage()"
});
formatter.result({
  "duration": 1245615030,
  "status": "passed"
});
formatter.match({
  "location": "HotelStepDefs.userCloseBrowser()"
});
formatter.result({
  "duration": 4431681441,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 35,
  "name": "Flexible date search for specific property",
  "description": "",
  "id": "hotel-features;flexible-date-search-for-specific-property",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 36,
  "name": "User tests in given \u003cbrowsers\u003e",
  "keyword": "Given "
});
formatter.step({
  "line": 37,
  "name": "User opens given \u003curls\u003e",
  "keyword": "Given "
});
formatter.step({
  "line": 38,
  "name": "User Selects Flexible Date Search",
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "Select Market - \"Las Vegas\"",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "Select Property \"Flamingo Las Vegas\"",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "Select Check-in \u0026 Checkout dates",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "Room count \"1\"",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "Guest \"2\" Adults,  \"0\" Children",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "Click on Search",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "Verify flex property listing page",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "Select Dates from the calendar",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "Click on Select Room",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "Selct Room Options",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "Select room Fab Room  1 King  Non-Smoking",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "Verify Itinerary Page",
  "keyword": "Then "
});
formatter.step({
  "line": 51,
  "name": "Select a room from UPSELL listing and click Upgrade",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "Check whether the room added was upgraded with the new room",
  "keyword": "Then "
});
formatter.step({
  "line": 53,
  "name": "Continue to Checkout",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "Check the room details added to cart as Room \"1\" and Guests \"2\"",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "Verify Payment Page",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "User close browser",
  "keyword": "And "
});
formatter.examples({
  "line": 58,
  "name": "",
  "description": "",
  "id": "hotel-features;flexible-date-search-for-specific-property;",
  "rows": [
    {
      "cells": [
        "urls",
        "browsers"
      ],
      "line": 59,
      "id": "hotel-features;flexible-date-search-for-specific-property;;1"
    },
    {
      "cells": [
        "urlroomavailfalse",
        "chrome"
      ],
      "line": 60,
      "id": "hotel-features;flexible-date-search-for-specific-property;;2"
    },
    {
      "cells": [
        "urlroomavailtrue",
        "chrome"
      ],
      "line": 61,
      "id": "hotel-features;flexible-date-search-for-specific-property;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 60,
  "name": "Flexible date search for specific property",
  "description": "",
  "id": "hotel-features;flexible-date-search-for-specific-property;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 36,
  "name": "User tests in given chrome",
  "matchedColumns": [
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 37,
  "name": "User opens given urlroomavailfalse",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 38,
  "name": "User Selects Flexible Date Search",
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "Select Market - \"Las Vegas\"",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "Select Property \"Flamingo Las Vegas\"",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "Select Check-in \u0026 Checkout dates",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "Room count \"1\"",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "Guest \"2\" Adults,  \"0\" Children",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "Click on Search",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "Verify flex property listing page",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "Select Dates from the calendar",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "Click on Select Room",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "Selct Room Options",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "Select room Fab Room  1 King  Non-Smoking",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "Verify Itinerary Page",
  "keyword": "Then "
});
formatter.step({
  "line": 51,
  "name": "Select a room from UPSELL listing and click Upgrade",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "Check whether the room added was upgraded with the new room",
  "keyword": "Then "
});
formatter.step({
  "line": 53,
  "name": "Continue to Checkout",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "Check the room details added to cart as Room \"1\" and Guests \"2\"",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "Verify Payment Page",
  "keyword": "And "
});
formatter.step({
  "line": 56,
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
  "duration": 2719907520,
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
  "duration": 9745762502,
  "status": "passed"
});
formatter.match({
  "location": "HotelStepDefs.userSelectsFlexibleDateSearch()"
});
formatter.result({
  "duration": 389119009,
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
  "duration": 414442986,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Flamingo Las Vegas",
      "offset": 17
    }
  ],
  "location": "HotelStepDefs.selectProperty(String)"
});
formatter.result({
  "duration": 260654383,
  "status": "passed"
});
formatter.match({
  "location": "HotelStepDefs.selectCheckInCheckoutDates()"
});
formatter.result({
  "duration": 273951091,
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
  "duration": 125787458,
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
  "duration": 336862916,
  "status": "passed"
});
formatter.match({
  "location": "HotelStepDefs.clickOnSearch()"
});
formatter.result({
  "duration": 189973045,
  "status": "passed"
});
formatter.match({
  "location": "HotelStepDefs.verifyFlexPropertyListingPage()"
});
formatter.result({
  "duration": 8159657737,
  "status": "passed"
});
formatter.match({
  "location": "HotelStepDefs.selectDatesFromTheCalendar()"
});
formatter.result({
  "duration": 525191091,
  "status": "passed"
});
formatter.match({
  "location": "HotelStepDefs.clickOnSelectRoom()"
});
formatter.result({
  "duration": 293490744,
  "status": "passed"
});
formatter.match({
  "location": "HotelStepDefs.selctRoomOptions()"
});
formatter.result({
  "duration": 6430263449,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 22
    }
  ],
  "location": "HotelStepDefs.selectRoomFabRoomKingNonSmoking(int)"
});
formatter.result({
  "duration": 5118564074,
  "status": "passed"
});
formatter.match({
  "location": "HotelStepDefs.verifyItineraryPage()"
});
formatter.result({
  "duration": 680729901,
  "status": "passed"
});
formatter.match({
  "location": "HotelStepDefs.selectARoomFromUPSELLListingAndClickUpgrade()"
});
formatter.result({
  "duration": 6942491667,
  "status": "passed"
});
formatter.match({
  "location": "HotelStepDefs.checkWhetherTheRoomAddedWasUpgradedWithTheNewRoom()"
});
formatter.result({
  "duration": 90239357,
  "status": "passed"
});
formatter.match({
  "location": "HotelStepDefs.continueToCheckout()"
});
formatter.result({
  "duration": 409172919,
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
  "duration": 1576718471,
  "status": "passed"
});
formatter.match({
  "location": "HotelStepDefs.verifyPaymentPage()"
});
formatter.result({
  "duration": 169935340,
  "status": "passed"
});
formatter.match({
  "location": "HotelStepDefs.userCloseBrowser()"
});
formatter.result({
  "duration": 5742100572,
  "status": "passed"
});
formatter.scenario({
  "line": 61,
  "name": "Flexible date search for specific property",
  "description": "",
  "id": "hotel-features;flexible-date-search-for-specific-property;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 36,
  "name": "User tests in given chrome",
  "matchedColumns": [
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 37,
  "name": "User opens given urlroomavailtrue",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 38,
  "name": "User Selects Flexible Date Search",
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "Select Market - \"Las Vegas\"",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "Select Property \"Flamingo Las Vegas\"",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "Select Check-in \u0026 Checkout dates",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "Room count \"1\"",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "Guest \"2\" Adults,  \"0\" Children",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "Click on Search",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "Verify flex property listing page",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "Select Dates from the calendar",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "Click on Select Room",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "Selct Room Options",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "Select room Fab Room  1 King  Non-Smoking",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "Verify Itinerary Page",
  "keyword": "Then "
});
formatter.step({
  "line": 51,
  "name": "Select a room from UPSELL listing and click Upgrade",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "Check whether the room added was upgraded with the new room",
  "keyword": "Then "
});
formatter.step({
  "line": 53,
  "name": "Continue to Checkout",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "Check the room details added to cart as Room \"1\" and Guests \"2\"",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "Verify Payment Page",
  "keyword": "And "
});
formatter.step({
  "line": 56,
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
  "duration": 2239562773,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "urlroomavailtrue",
      "offset": 17
    }
  ],
  "location": "HotelStepDefs.userOpensGivenUrls(String)"
});
formatter.result({
  "duration": 8984694335,
  "status": "passed"
});
formatter.match({
  "location": "HotelStepDefs.userSelectsFlexibleDateSearch()"
});
formatter.result({
  "duration": 238518590,
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
  "duration": 396656241,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Flamingo Las Vegas",
      "offset": 17
    }
  ],
  "location": "HotelStepDefs.selectProperty(String)"
});
formatter.result({
  "duration": 289363174,
  "status": "passed"
});
formatter.match({
  "location": "HotelStepDefs.selectCheckInCheckoutDates()"
});
formatter.result({
  "duration": 264603151,
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
  "duration": 124992303,
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
  "duration": 333693638,
  "status": "passed"
});
formatter.match({
  "location": "HotelStepDefs.clickOnSearch()"
});
formatter.result({
  "duration": 202672306,
  "status": "passed"
});
formatter.match({
  "location": "HotelStepDefs.verifyFlexPropertyListingPage()"
});
formatter.result({
  "duration": 8094230800,
  "status": "passed"
});
formatter.match({
  "location": "HotelStepDefs.selectDatesFromTheCalendar()"
});
formatter.result({
  "duration": 456998936,
  "status": "passed"
});
formatter.match({
  "location": "HotelStepDefs.clickOnSelectRoom()"
});
formatter.result({
  "duration": 272611967,
  "status": "passed"
});
formatter.match({
  "location": "HotelStepDefs.selctRoomOptions()"
});
formatter.result({
  "duration": 7204816310,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 22
    }
  ],
  "location": "HotelStepDefs.selectRoomFabRoomKingNonSmoking(int)"
});
formatter.result({
  "duration": 5335120813,
  "status": "passed"
});
formatter.match({
  "location": "HotelStepDefs.verifyItineraryPage()"
});
formatter.result({
  "duration": 189449063,
  "status": "passed"
});
formatter.match({
  "location": "HotelStepDefs.selectARoomFromUPSELLListingAndClickUpgrade()"
});
formatter.result({
  "duration": 5134266777,
  "status": "passed"
});
formatter.match({
  "location": "HotelStepDefs.checkWhetherTheRoomAddedWasUpgradedWithTheNewRoom()"
});
formatter.result({
  "duration": 74415112,
  "status": "passed"
});
formatter.match({
  "location": "HotelStepDefs.continueToCheckout()"
});
formatter.result({
  "duration": 415337536,
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
  "duration": 1568542737,
  "status": "passed"
});
formatter.match({
  "location": "HotelStepDefs.verifyPaymentPage()"
});
formatter.result({
  "duration": 190372783,
  "status": "passed"
});
formatter.match({
  "location": "HotelStepDefs.userCloseBrowser()"
});
formatter.result({
  "duration": 5741148762,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 64,
  "name": "Multi Room Search",
  "description": "",
  "id": "hotel-features;multi-room-search",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 66,
  "name": "User tests in given \u003cbrowsers\u003e",
  "keyword": "Given "
});
formatter.step({
  "line": 67,
  "name": "User opens given \u003curls\u003e",
  "keyword": "Given "
});
formatter.step({
  "line": 68,
  "name": "Select Market - \"Las Vegas\"",
  "keyword": "And "
});
formatter.step({
  "line": 69,
  "name": "Select Property \"Flamingo Las Vegas\"",
  "keyword": "And "
});
formatter.step({
  "line": 70,
  "name": "User enter Checkin \u0026 Checkout dates",
  "keyword": "And "
});
formatter.step({
  "line": 71,
  "name": "Room count \"2\"",
  "keyword": "And "
});
formatter.step({
  "line": 72,
  "name": "Guest \"2\" Adults,  \"1\" Children",
  "keyword": "And "
});
formatter.step({
  "line": 73,
  "name": "Click on Search",
  "keyword": "And "
});
formatter.step({
  "line": 74,
  "name": "User  verify Room Listing Page",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 75,
      "value": "#And  User select accessibility filter"
    }
  ],
  "line": 76,
  "name": "User select Room",
  "keyword": "And "
});
formatter.step({
  "line": 77,
  "name": "Verify Itinerary Page",
  "keyword": "Then "
});
formatter.step({
  "line": 78,
  "name": "Continue to Checkout",
  "keyword": "And "
});
formatter.step({
  "line": 79,
  "name": "Check the room details added to cart as Room \"2\" and Guests \"2\"",
  "keyword": "And "
});
formatter.step({
  "line": 80,
  "name": "Verify Cart has \"2\" room",
  "keyword": "And "
});
formatter.step({
  "line": 81,
  "name": "Verify Payment Page",
  "keyword": "And "
});
formatter.step({
  "line": 82,
  "name": "User close browser",
  "keyword": "And "
});
formatter.examples({
  "comments": [
    {
      "line": 83,
      "value": "#"
    }
  ],
  "line": 84,
  "name": "",
  "description": "",
  "id": "hotel-features;multi-room-search;",
  "rows": [
    {
      "cells": [
        "urls",
        "browsers"
      ],
      "line": 85,
      "id": "hotel-features;multi-room-search;;1"
    },
    {
      "cells": [
        "urlroomavailfalse",
        "firefox"
      ],
      "line": 86,
      "id": "hotel-features;multi-room-search;;2"
    },
    {
      "cells": [
        "urlroomavailtrue",
        "chrome"
      ],
      "line": 87,
      "id": "hotel-features;multi-room-search;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 86,
  "name": "Multi Room Search",
  "description": "",
  "id": "hotel-features;multi-room-search;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 66,
  "name": "User tests in given firefox",
  "matchedColumns": [
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 67,
  "name": "User opens given urlroomavailfalse",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 68,
  "name": "Select Market - \"Las Vegas\"",
  "keyword": "And "
});
formatter.step({
  "line": 69,
  "name": "Select Property \"Flamingo Las Vegas\"",
  "keyword": "And "
});
formatter.step({
  "line": 70,
  "name": "User enter Checkin \u0026 Checkout dates",
  "keyword": "And "
});
formatter.step({
  "line": 71,
  "name": "Room count \"2\"",
  "keyword": "And "
});
formatter.step({
  "line": 72,
  "name": "Guest \"2\" Adults,  \"1\" Children",
  "keyword": "And "
});
formatter.step({
  "line": 73,
  "name": "Click on Search",
  "keyword": "And "
});
formatter.step({
  "line": 74,
  "name": "User  verify Room Listing Page",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 75,
      "value": "#And  User select accessibility filter"
    }
  ],
  "line": 76,
  "name": "User select Room",
  "keyword": "And "
});
formatter.step({
  "line": 77,
  "name": "Verify Itinerary Page",
  "keyword": "Then "
});
formatter.step({
  "line": 78,
  "name": "Continue to Checkout",
  "keyword": "And "
});
formatter.step({
  "line": 79,
  "name": "Check the room details added to cart as Room \"2\" and Guests \"2\"",
  "keyword": "And "
});
formatter.step({
  "line": 80,
  "name": "Verify Cart has \"2\" room",
  "keyword": "And "
});
formatter.step({
  "line": 81,
  "name": "Verify Payment Page",
  "keyword": "And "
});
formatter.step({
  "line": 82,
  "name": "User close browser",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "firefox",
      "offset": 20
    }
  ],
  "location": "HotelStepDefs.userTestsInGivenBrowsers(String)"
});
formatter.result({
  "duration": 39525173805,
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
  "duration": 1244996516,
  "error_message": "org.openqa.selenium.WebDriverException: Reached error page: about:certerror?e\u003dnssBadCert\u0026u\u003dhttps%3A//www.totalrewards.com/reserve/\u0026c\u003dUTF-8\u0026f\u003dregular\u0026d\u003dwww.totalrewards.com%20uses%20an%20invalid%20security%20certificate.%0A%0AThe%20certificate%20is%20not%20trusted%20because%20the%20issuer%20certificate%20is%20unknown.%0AThe%20server%20might%20not%20be%20sending%20the%20appropriate%20intermediate%20certificates.%0AAn%20additional%20root%20certificate%20may%20need%20to%20be%20imported.%0A%0AError%20code%3A%20%3Ca%20id%3D%22errorCode%22%20title%3D%22SEC_ERROR_UNKNOWN_ISSUER%22%3ESEC_ERROR_UNKNOWN_ISSUER%3C/a%3E%0A\nBuild info: version: \u00273.0.1\u0027, revision: \u00271969d75\u0027, time: \u00272016-10-18 09:49:13 -0700\u0027\nSystem info: host: \u0027ADMIN-PC\u0027, ip: \u0027192.168.0.3\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_65\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities [{rotatable\u003dfalse, raisesAccessibilityExceptions\u003dfalse, marionette\u003dtrue, firefoxOptions\u003d{args\u003d[], prefs\u003d{}}, appBuildId\u003d20170125094131, version\u003d, platform\u003dXP, proxy\u003d{}, command_id\u003d1, specificationLevel\u003d0, acceptSslCerts\u003dfalse, processId\u003d6360, browserVersion\u003d51.0.1, platformVersion\u003d6.1, XULappId\u003d{ec8030f7-c20a-464f-9b0e-13a3a9e97384}, browserName\u003dfirefox, takesScreenshot\u003dtrue, takesElementScreenshot\u003dtrue, platformName\u003dwindows_nt}]\nSession ID: a809373a-e2fc-41bc-a5b4-79a3cb5dfe4b\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:422)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:127)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:93)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:42)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:163)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:601)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:322)\r\n\tat Steps.Hotel.HotelStepDefsSupports.openURL(HotelStepDefsSupports.java:89)\r\n\tat Steps.Hotel.HotelStepDefs.userOpensGivenUrls(HotelStepDefs.java:282)\r\n\tat ✽.Given User opens given urlroomavailfalse(Hotel/Hotel.feature:67)\r\n",
  "status": "failed"
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
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Flamingo Las Vegas",
      "offset": 17
    }
  ],
  "location": "HotelStepDefs.selectProperty(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MarketSearch.userEnterCheckinCheckoutDates()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 7
    },
    {
      "val": "1",
      "offset": 20
    }
  ],
  "location": "HotelStepDefs.guestAdultsChildren(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HotelStepDefs.clickOnSearch()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MarketSearch.userVerifyRoomListingPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MarketSearch.userSelectRoom()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HotelStepDefs.verifyItineraryPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HotelStepDefs.continueToCheckout()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
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
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 17
    }
  ],
  "location": "HotelStepDefs.verifyCartHasRoom(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HotelStepDefs.verifyPaymentPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HotelStepDefs.userCloseBrowser()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 87,
  "name": "Multi Room Search",
  "description": "",
  "id": "hotel-features;multi-room-search;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 66,
  "name": "User tests in given chrome",
  "matchedColumns": [
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 67,
  "name": "User opens given urlroomavailtrue",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 68,
  "name": "Select Market - \"Las Vegas\"",
  "keyword": "And "
});
formatter.step({
  "line": 69,
  "name": "Select Property \"Flamingo Las Vegas\"",
  "keyword": "And "
});
formatter.step({
  "line": 70,
  "name": "User enter Checkin \u0026 Checkout dates",
  "keyword": "And "
});
formatter.step({
  "line": 71,
  "name": "Room count \"2\"",
  "keyword": "And "
});
formatter.step({
  "line": 72,
  "name": "Guest \"2\" Adults,  \"1\" Children",
  "keyword": "And "
});
formatter.step({
  "line": 73,
  "name": "Click on Search",
  "keyword": "And "
});
formatter.step({
  "line": 74,
  "name": "User  verify Room Listing Page",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 75,
      "value": "#And  User select accessibility filter"
    }
  ],
  "line": 76,
  "name": "User select Room",
  "keyword": "And "
});
formatter.step({
  "line": 77,
  "name": "Verify Itinerary Page",
  "keyword": "Then "
});
formatter.step({
  "line": 78,
  "name": "Continue to Checkout",
  "keyword": "And "
});
formatter.step({
  "line": 79,
  "name": "Check the room details added to cart as Room \"2\" and Guests \"2\"",
  "keyword": "And "
});
formatter.step({
  "line": 80,
  "name": "Verify Cart has \"2\" room",
  "keyword": "And "
});
formatter.step({
  "line": 81,
  "name": "Verify Payment Page",
  "keyword": "And "
});
formatter.step({
  "line": 82,
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
  "duration": 2523763376,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "urlroomavailtrue",
      "offset": 17
    }
  ],
  "location": "HotelStepDefs.userOpensGivenUrls(String)"
});
formatter.result({
  "duration": 9830108415,
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
  "duration": 597308247,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Flamingo Las Vegas",
      "offset": 17
    }
  ],
  "location": "HotelStepDefs.selectProperty(String)"
});
formatter.result({
  "duration": 282793956,
  "status": "passed"
});
formatter.match({
  "location": "MarketSearch.userEnterCheckinCheckoutDates()"
});
formatter.result({
  "duration": 1404802264,
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
  "duration": 430818762,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 7
    },
    {
      "val": "1",
      "offset": 20
    }
  ],
  "location": "HotelStepDefs.guestAdultsChildren(String,String)"
});
formatter.result({
  "duration": 390387368,
  "status": "passed"
});
formatter.match({
  "location": "HotelStepDefs.clickOnSearch()"
});
formatter.result({
  "duration": 212997445,
  "status": "passed"
});
formatter.match({
  "location": "MarketSearch.userVerifyRoomListingPage()"
});
formatter.result({
  "duration": 6662464550,
  "status": "passed"
});
formatter.match({
  "location": "MarketSearch.userSelectRoom()"
});
formatter.result({
  "duration": 5583825173,
  "status": "passed"
});
formatter.match({
  "location": "HotelStepDefs.verifyItineraryPage()"
});
formatter.result({
  "duration": 167217658,
  "status": "passed"
});
formatter.match({
  "location": "HotelStepDefs.continueToCheckout()"
});
formatter.result({
  "duration": 373722592,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
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
  "duration": 2895481874,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 17
    }
  ],
  "location": "HotelStepDefs.verifyCartHasRoom(int)"
});
formatter.result({
  "duration": 339820441,
  "status": "passed"
});
formatter.match({
  "location": "HotelStepDefs.verifyPaymentPage()"
});
formatter.result({
  "duration": 180910324,
  "status": "passed"
});
formatter.match({
  "location": "HotelStepDefs.userCloseBrowser()"
});
formatter.result({
  "duration": 4616142955,
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
  "line": 13,
  "name": "User verify Market Listing Page",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User select Property  Flamingo Las Vegas",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User  verify Room Listing Page",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User select accessibility filter",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User select Room",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 18,
      "value": "#   And  Verify Itinerary Page"
    },
    {
      "line": 19,
      "value": "#   And  User navigate to Dining, Reserve a Table -\u003e On Hold, need to implement button functionality in Find a Table page"
    }
  ],
  "line": 20,
  "name": "User verify Trip Summary Page",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 21,
      "value": "#   And  User remove room from cart-----------\u003e Need to add button functionality to capture this event in itinerary page"
    },
    {
      "line": 22,
      "value": "#   And  User adds BoB Voucher to cart"
    },
    {
      "line": 23,
      "value": "#   And  User upgrade room in cart"
    }
  ],
  "line": 24,
  "name": "User click on continue to Checkout",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "User verify the payment page",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "User close browser",
  "keyword": "And "
});
formatter.examples({
  "line": 27,
  "name": "",
  "description": "",
  "id": "exact-date-market-search;market-search;",
  "rows": [
    {
      "cells": [
        "urls",
        "browsers"
      ],
      "line": 28,
      "id": "exact-date-market-search;market-search;;1"
    },
    {
      "cells": [
        "urlroomavailfalse",
        "chrome"
      ],
      "line": 29,
      "id": "exact-date-market-search;market-search;;2"
    },
    {
      "cells": [
        "urlroomavailtrue",
        "chrome"
      ],
      "line": 30,
      "id": "exact-date-market-search;market-search;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 29,
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
  "line": 13,
  "name": "User verify Market Listing Page",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User select Property  Flamingo Las Vegas",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User  verify Room Listing Page",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User select accessibility filter",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User select Room",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 18,
      "value": "#   And  Verify Itinerary Page"
    },
    {
      "line": 19,
      "value": "#   And  User navigate to Dining, Reserve a Table -\u003e On Hold, need to implement button functionality in Find a Table page"
    }
  ],
  "line": 20,
  "name": "User verify Trip Summary Page",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 21,
      "value": "#   And  User remove room from cart-----------\u003e Need to add button functionality to capture this event in itinerary page"
    },
    {
      "line": 22,
      "value": "#   And  User adds BoB Voucher to cart"
    },
    {
      "line": 23,
      "value": "#   And  User upgrade room in cart"
    }
  ],
  "line": 24,
  "name": "User click on continue to Checkout",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "User verify the payment page",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
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
  "duration": 2909965374,
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
  "duration": 9424277635,
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
  "duration": 379078549,
  "status": "passed"
});
formatter.match({
  "location": "MarketSearch.userEnterCheckinCheckoutDates()"
});
formatter.result({
  "duration": 1274951518,
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
  "duration": 360705161,
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
  "duration": 435461131,
  "status": "passed"
});
formatter.match({
  "location": "MarketSearch.userEntersPromotion()"
});
formatter.result({
  "duration": 264456220,
  "status": "passed"
});
formatter.match({
  "location": "HotelStepDefs.clickOnSearch()"
});
formatter.result({
  "duration": 582887949,
  "status": "passed"
});
formatter.match({
  "location": "MarketSearch.userVerifyMarketListingPage()"
});
formatter.result({
  "duration": 4602930516,
  "status": "passed"
});
formatter.match({
  "location": "MarketSearch.userSelectPropertyFlamingoLasVegas()"
});
formatter.result({
  "duration": 958367770,
  "status": "passed"
});
formatter.match({
  "location": "MarketSearch.userVerifyRoomListingPage()"
});
formatter.result({
  "duration": 4797851675,
  "status": "passed"
});
formatter.match({
  "location": "MarketSearch.userSelectAccessibilityFilter()"
});
formatter.result({
  "duration": 1319758428,
  "status": "passed"
});
formatter.match({
  "location": "MarketSearch.userSelectRoom()"
});
formatter.result({
  "duration": 3753222487,
  "status": "passed"
});
formatter.match({
  "location": "MarketSearch.userVerifyTripSummaryPage()"
});
formatter.result({
  "duration": 33678513,
  "status": "passed"
});
formatter.match({
  "location": "MarketSearch.userClickOnContinueToCheckout()"
});
formatter.result({
  "duration": 294467402,
  "status": "passed"
});
formatter.match({
  "location": "MarketSearch.userVerifyThePaymentPage()"
});
formatter.result({
  "duration": 195601255,
  "status": "passed"
});
formatter.match({
  "location": "HotelStepDefs.userCloseBrowser()"
});
formatter.result({
  "duration": 5315678394,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "Market Search",
  "description": "",
  "id": "exact-date-market-search;market-search;;3",
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
  "name": "User opens given urlroomavailtrue",
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
  "line": 13,
  "name": "User verify Market Listing Page",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User select Property  Flamingo Las Vegas",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User  verify Room Listing Page",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User select accessibility filter",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User select Room",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 18,
      "value": "#   And  Verify Itinerary Page"
    },
    {
      "line": 19,
      "value": "#   And  User navigate to Dining, Reserve a Table -\u003e On Hold, need to implement button functionality in Find a Table page"
    }
  ],
  "line": 20,
  "name": "User verify Trip Summary Page",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 21,
      "value": "#   And  User remove room from cart-----------\u003e Need to add button functionality to capture this event in itinerary page"
    },
    {
      "line": 22,
      "value": "#   And  User adds BoB Voucher to cart"
    },
    {
      "line": 23,
      "value": "#   And  User upgrade room in cart"
    }
  ],
  "line": 24,
  "name": "User click on continue to Checkout",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "User verify the payment page",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
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
  "duration": 2835631830,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "urlroomavailtrue",
      "offset": 17
    }
  ],
  "location": "HotelStepDefs.userOpensGivenUrls(String)"
});
formatter.result({
  "duration": 10019778415,
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
  "duration": 408849888,
  "status": "passed"
});
formatter.match({
  "location": "MarketSearch.userEnterCheckinCheckoutDates()"
});
formatter.result({
  "duration": 1215362925,
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
  "duration": 401163023,
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
  "duration": 269153689,
  "status": "passed"
});
formatter.match({
  "location": "MarketSearch.userEntersPromotion()"
});
formatter.result({
  "duration": 169942903,
  "status": "passed"
});
formatter.match({
  "location": "HotelStepDefs.clickOnSearch()"
});
formatter.result({
  "duration": 499493844,
  "status": "passed"
});
formatter.match({
  "location": "MarketSearch.userVerifyMarketListingPage()"
});
formatter.result({
  "duration": 3620859870,
  "status": "passed"
});
formatter.match({
  "location": "MarketSearch.userSelectPropertyFlamingoLasVegas()"
});
formatter.result({
  "duration": 867013466,
  "status": "passed"
});
formatter.match({
  "location": "MarketSearch.userVerifyRoomListingPage()"
});
formatter.result({
  "duration": 4284646798,
  "status": "passed"
});
formatter.match({
  "location": "MarketSearch.userSelectAccessibilityFilter()"
});
formatter.result({
  "duration": 22628642887,
  "status": "passed"
});
formatter.match({
  "location": "MarketSearch.userSelectRoom()"
});
formatter.result({
  "duration": 3743401883,
  "status": "passed"
});
formatter.match({
  "location": "MarketSearch.userVerifyTripSummaryPage()"
});
formatter.result({
  "duration": 124440771,
  "status": "passed"
});
formatter.match({
  "location": "MarketSearch.userClickOnContinueToCheckout()"
});
formatter.result({
  "duration": 261370131,
  "status": "passed"
});
formatter.match({
  "location": "MarketSearch.userVerifyThePaymentPage()"
});
formatter.result({
  "duration": 60050453,
  "status": "passed"
});
formatter.match({
  "location": "HotelStepDefs.userCloseBrowser()"
});
formatter.result({
  "duration": 5435099746,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 33,
  "name": "Property Search- Exact Date Property Search",
  "description": "",
  "id": "exact-date-market-search;property-search--exact-date-property-search",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 34,
  "name": "User tests in given \u003cbrowsers\u003e",
  "keyword": "Given "
});
formatter.step({
  "line": 35,
  "name": "User opens given \u003curls\u003e",
  "keyword": "Given "
});
formatter.step({
  "line": 36,
  "name": "Select Market - \"Las Vegas\"",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "Select Property \"Flamingo Las Vegas\"",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "User enter Checkin \u0026 Checkout dates",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "Room count \"2\"",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "Guest \"2\" Adults,  \"0\" Children",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "User enters promotion",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "Click on Search",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "User  verify Room Listing Page",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "User select room filters",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "User select accessibility filter",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "User select Room",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "User verify Trip Summary Page",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 49,
      "value": "#   And  User add restaurant to cart"
    }
  ],
  "line": 50,
  "name": "User verify Trip Summary Page",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 52,
      "value": "#   And  User remove room from cart"
    },
    {
      "line": 53,
      "value": "#   And  User adds BoB Voucher to cart"
    },
    {
      "line": 54,
      "value": "#   And  User upgrade room in cart"
    }
  ],
  "line": 55,
  "name": "User click on continue to Checkout",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "User verify the payment page",
  "keyword": "Then "
});
formatter.step({
  "line": 57,
  "name": "User close browser",
  "keyword": "And "
});
formatter.examples({
  "line": 58,
  "name": "",
  "description": "",
  "id": "exact-date-market-search;property-search--exact-date-property-search;",
  "rows": [
    {
      "cells": [
        "urls",
        "browsers"
      ],
      "line": 59,
      "id": "exact-date-market-search;property-search--exact-date-property-search;;1"
    },
    {
      "cells": [
        "urlroomavailfalse",
        "chrome"
      ],
      "line": 60,
      "id": "exact-date-market-search;property-search--exact-date-property-search;;2"
    },
    {
      "cells": [
        "urlroomavailtrue",
        "chrome"
      ],
      "line": 61,
      "id": "exact-date-market-search;property-search--exact-date-property-search;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 60,
  "name": "Property Search- Exact Date Property Search",
  "description": "",
  "id": "exact-date-market-search;property-search--exact-date-property-search;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 34,
  "name": "User tests in given chrome",
  "matchedColumns": [
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 35,
  "name": "User opens given urlroomavailfalse",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 36,
  "name": "Select Market - \"Las Vegas\"",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "Select Property \"Flamingo Las Vegas\"",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "User enter Checkin \u0026 Checkout dates",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "Room count \"2\"",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "Guest \"2\" Adults,  \"0\" Children",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "User enters promotion",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "Click on Search",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "User  verify Room Listing Page",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "User select room filters",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "User select accessibility filter",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "User select Room",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "User verify Trip Summary Page",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 49,
      "value": "#   And  User add restaurant to cart"
    }
  ],
  "line": 50,
  "name": "User verify Trip Summary Page",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 52,
      "value": "#   And  User remove room from cart"
    },
    {
      "line": 53,
      "value": "#   And  User adds BoB Voucher to cart"
    },
    {
      "line": 54,
      "value": "#   And  User upgrade room in cart"
    }
  ],
  "line": 55,
  "name": "User click on continue to Checkout",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "User verify the payment page",
  "keyword": "Then "
});
formatter.step({
  "line": 57,
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
  "duration": 2647109728,
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
  "duration": 8885692601,
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
  "duration": 431862403,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Flamingo Las Vegas",
      "offset": 17
    }
  ],
  "location": "HotelStepDefs.selectProperty(String)"
});
formatter.result({
  "duration": 287861452,
  "status": "passed"
});
formatter.match({
  "location": "MarketSearch.userEnterCheckinCheckoutDates()"
});
formatter.result({
  "duration": 1598963921,
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
  "duration": 434248951,
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
  "duration": 335688550,
  "status": "passed"
});
formatter.match({
  "location": "MarketSearch.userEntersPromotion()"
});
formatter.result({
  "duration": 162347329,
  "status": "passed"
});
formatter.match({
  "location": "HotelStepDefs.clickOnSearch()"
});
formatter.result({
  "duration": 454169435,
  "status": "passed"
});
formatter.match({
  "location": "MarketSearch.userVerifyRoomListingPage()"
});
formatter.result({
  "duration": 4964038115,
  "status": "passed"
});
formatter.match({
  "location": "MarketSearch.userSelectRoomFilters()"
});
formatter.result({
  "duration": 459256919,
  "status": "passed"
});
formatter.match({
  "location": "MarketSearch.userSelectAccessibilityFilter()"
});
formatter.result({
  "duration": 1267427791,
  "status": "passed"
});
formatter.match({
  "location": "MarketSearch.userSelectRoom()"
});
formatter.result({
  "duration": 4059895960,
  "status": "passed"
});
formatter.match({
  "location": "MarketSearch.userVerifyTripSummaryPage()"
});
formatter.result({
  "duration": 143772992,
  "status": "passed"
});
formatter.match({
  "location": "MarketSearch.userVerifyTripSummaryPage()"
});
formatter.result({
  "duration": 56254558,
  "status": "passed"
});
formatter.match({
  "location": "MarketSearch.userClickOnContinueToCheckout()"
});
formatter.result({
  "duration": 379642504,
  "status": "passed"
});
formatter.match({
  "location": "MarketSearch.userVerifyThePaymentPage()"
});
formatter.result({
  "duration": 63306703,
  "status": "passed"
});
formatter.match({
  "location": "HotelStepDefs.userCloseBrowser()"
});
formatter.result({
  "duration": 5460250863,
  "status": "passed"
});
formatter.scenario({
  "line": 61,
  "name": "Property Search- Exact Date Property Search",
  "description": "",
  "id": "exact-date-market-search;property-search--exact-date-property-search;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 34,
  "name": "User tests in given chrome",
  "matchedColumns": [
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 35,
  "name": "User opens given urlroomavailtrue",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 36,
  "name": "Select Market - \"Las Vegas\"",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "Select Property \"Flamingo Las Vegas\"",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "User enter Checkin \u0026 Checkout dates",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "Room count \"2\"",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "Guest \"2\" Adults,  \"0\" Children",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "User enters promotion",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "Click on Search",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "User  verify Room Listing Page",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "User select room filters",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "User select accessibility filter",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "User select Room",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "User verify Trip Summary Page",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 49,
      "value": "#   And  User add restaurant to cart"
    }
  ],
  "line": 50,
  "name": "User verify Trip Summary Page",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 52,
      "value": "#   And  User remove room from cart"
    },
    {
      "line": 53,
      "value": "#   And  User adds BoB Voucher to cart"
    },
    {
      "line": 54,
      "value": "#   And  User upgrade room in cart"
    }
  ],
  "line": 55,
  "name": "User click on continue to Checkout",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "User verify the payment page",
  "keyword": "Then "
});
formatter.step({
  "line": 57,
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
  "duration": 3009840050,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "urlroomavailtrue",
      "offset": 17
    }
  ],
  "location": "HotelStepDefs.userOpensGivenUrls(String)"
});
formatter.result({
  "duration": 10259615063,
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
  "duration": 462885356,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Flamingo Las Vegas",
      "offset": 17
    }
  ],
  "location": "HotelStepDefs.selectProperty(String)"
});
formatter.result({
  "duration": 319531009,
  "status": "passed"
});
formatter.match({
  "location": "MarketSearch.userEnterCheckinCheckoutDates()"
});
formatter.result({
  "duration": 1357821101,
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
  "duration": 439444472,
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
  "duration": 277137656,
  "status": "passed"
});
formatter.match({
  "location": "MarketSearch.userEntersPromotion()"
});
formatter.result({
  "duration": 154045733,
  "status": "passed"
});
formatter.match({
  "location": "HotelStepDefs.clickOnSearch()"
});
formatter.result({
  "duration": 489066610,
  "status": "passed"
});
formatter.match({
  "location": "MarketSearch.userVerifyRoomListingPage()"
});
formatter.result({
  "duration": 5840641526,
  "status": "passed"
});
formatter.match({
  "location": "MarketSearch.userSelectRoomFilters()"
});
formatter.result({
  "duration": 298884513,
  "status": "passed"
});
formatter.match({
  "location": "MarketSearch.userSelectAccessibilityFilter()"
});
formatter.result({
  "duration": 6185053019,
  "status": "passed"
});
formatter.match({
  "location": "MarketSearch.userSelectRoom()"
});
formatter.result({
  "duration": 4835543779,
  "status": "passed"
});
formatter.match({
  "location": "MarketSearch.userVerifyTripSummaryPage()"
});
formatter.result({
  "duration": 36142847,
  "status": "passed"
});
formatter.match({
  "location": "MarketSearch.userVerifyTripSummaryPage()"
});
formatter.result({
  "duration": 20177613,
  "status": "passed"
});
formatter.match({
  "location": "MarketSearch.userClickOnContinueToCheckout()"
});
formatter.result({
  "duration": 324682235,
  "status": "passed"
});
formatter.match({
  "location": "MarketSearch.userVerifyThePaymentPage()"
});
formatter.result({
  "duration": 41403730,
  "status": "passed"
});
formatter.match({
  "location": "HotelStepDefs.userCloseBrowser()"
});
formatter.result({
  "duration": 5770198411,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 64,
  "name": "Room Type Calendar search- Flexible date search for specific property Search (Room Type Calendar)",
  "description": "",
  "id": "exact-date-market-search;room-type-calendar-search--flexible-date-search-for-specific-property-search-(room-type-calendar)",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 65,
  "name": "User tests in given \u003cbrowsers\u003e",
  "keyword": "Given "
});
formatter.step({
  "line": 66,
  "name": "User opens given \u003curls\u003e",
  "keyword": "Given "
});
formatter.step({
  "line": 67,
  "name": "User Select Flexible Date Search",
  "keyword": "When "
});
formatter.step({
  "line": 68,
  "name": "Select Market - \"Las Vegas\"",
  "keyword": "And "
});
formatter.step({
  "line": 69,
  "name": "Select Property \"Flamingo Las Vegas\"",
  "keyword": "And "
});
formatter.step({
  "line": 70,
  "name": "User select the Month",
  "keyword": "And "
});
formatter.step({
  "line": 71,
  "name": "Room count \"1\"",
  "keyword": "And "
});
formatter.step({
  "line": 72,
  "name": "Guest \"2\" Adults,  \"0\" Children",
  "keyword": "And "
});
formatter.step({
  "line": 73,
  "name": "User enters promotion",
  "keyword": "And "
});
formatter.step({
  "line": 74,
  "name": "Click on Search",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 75,
      "value": "#    And  Verify whether the Deal applied banner is shown in Rate Calendar page"
    }
  ],
  "line": 76,
  "name": "User select Dates from the calendar",
  "keyword": "And "
});
formatter.step({
  "line": 77,
  "name": "User click on Get Trip price button",
  "keyword": "And "
});
formatter.step({
  "line": 78,
  "name": "User click on Book it from pricing details overlay",
  "keyword": "And "
});
formatter.step({
  "line": 79,
  "name": "User verify Trip Summary Page",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 80,
      "value": "#    And  User adds BoB Voucher to cart"
    }
  ],
  "line": 81,
  "name": "User click on continue to Checkout",
  "keyword": "And "
});
formatter.step({
  "line": 82,
  "name": "User verify the payment page",
  "keyword": "Then "
});
formatter.step({
  "line": 83,
  "name": "User close browser",
  "keyword": "And "
});
formatter.examples({
  "line": 84,
  "name": "",
  "description": "",
  "id": "exact-date-market-search;room-type-calendar-search--flexible-date-search-for-specific-property-search-(room-type-calendar);",
  "rows": [
    {
      "cells": [
        "urls",
        "browsers"
      ],
      "line": 85,
      "id": "exact-date-market-search;room-type-calendar-search--flexible-date-search-for-specific-property-search-(room-type-calendar);;1"
    },
    {
      "cells": [
        "urlroomavailfalse",
        "chrome"
      ],
      "line": 86,
      "id": "exact-date-market-search;room-type-calendar-search--flexible-date-search-for-specific-property-search-(room-type-calendar);;2"
    },
    {
      "cells": [
        "urlroomavailtrue",
        "chrome"
      ],
      "line": 87,
      "id": "exact-date-market-search;room-type-calendar-search--flexible-date-search-for-specific-property-search-(room-type-calendar);;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 86,
  "name": "Room Type Calendar search- Flexible date search for specific property Search (Room Type Calendar)",
  "description": "",
  "id": "exact-date-market-search;room-type-calendar-search--flexible-date-search-for-specific-property-search-(room-type-calendar);;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 65,
  "name": "User tests in given chrome",
  "matchedColumns": [
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 66,
  "name": "User opens given urlroomavailfalse",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 67,
  "name": "User Select Flexible Date Search",
  "keyword": "When "
});
formatter.step({
  "line": 68,
  "name": "Select Market - \"Las Vegas\"",
  "keyword": "And "
});
formatter.step({
  "line": 69,
  "name": "Select Property \"Flamingo Las Vegas\"",
  "keyword": "And "
});
formatter.step({
  "line": 70,
  "name": "User select the Month",
  "keyword": "And "
});
formatter.step({
  "line": 71,
  "name": "Room count \"1\"",
  "keyword": "And "
});
formatter.step({
  "line": 72,
  "name": "Guest \"2\" Adults,  \"0\" Children",
  "keyword": "And "
});
formatter.step({
  "line": 73,
  "name": "User enters promotion",
  "keyword": "And "
});
formatter.step({
  "line": 74,
  "name": "Click on Search",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 75,
      "value": "#    And  Verify whether the Deal applied banner is shown in Rate Calendar page"
    }
  ],
  "line": 76,
  "name": "User select Dates from the calendar",
  "keyword": "And "
});
formatter.step({
  "line": 77,
  "name": "User click on Get Trip price button",
  "keyword": "And "
});
formatter.step({
  "line": 78,
  "name": "User click on Book it from pricing details overlay",
  "keyword": "And "
});
formatter.step({
  "line": 79,
  "name": "User verify Trip Summary Page",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 80,
      "value": "#    And  User adds BoB Voucher to cart"
    }
  ],
  "line": 81,
  "name": "User click on continue to Checkout",
  "keyword": "And "
});
formatter.step({
  "line": 82,
  "name": "User verify the payment page",
  "keyword": "Then "
});
formatter.step({
  "line": 83,
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
  "duration": 2703679755,
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
  "duration": 10080803367,
  "status": "passed"
});
formatter.match({
  "location": "MarketSearch.userSelectFlexibleDateSearch()"
});
formatter.result({
  "duration": 1651268089,
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
  "duration": 420292674,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Flamingo Las Vegas",
      "offset": 17
    }
  ],
  "location": "HotelStepDefs.selectProperty(String)"
});
formatter.result({
  "duration": 272696776,
  "status": "passed"
});
formatter.match({
  "location": "MarketSearch.userSelectTheMonth()"
});
formatter.result({
  "duration": 266664506,
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
  "duration": 202606403,
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
  "duration": 267340821,
  "status": "passed"
});
formatter.match({
  "location": "MarketSearch.userEntersPromotion()"
});
formatter.result({
  "duration": 146921743,
  "status": "passed"
});
formatter.match({
  "location": "HotelStepDefs.clickOnSearch()"
});
formatter.result({
  "duration": 186045343,
  "status": "passed"
});
formatter.match({
  "location": "MarketSearch.userSelectDatesFromTheCalendar()"
});
formatter.result({
  "duration": 7265563604,
  "status": "passed"
});
formatter.match({
  "location": "MarketSearch.userClickOnGetTripPriceButton()"
});
formatter.result({
  "duration": 2101997073,
  "status": "passed"
});
formatter.match({
  "location": "MarketSearch.userClickOnBookItFromPricingDetailsOverlay()"
});
formatter.result({
  "duration": 1479200091,
  "status": "passed"
});
formatter.match({
  "location": "MarketSearch.userVerifyTripSummaryPage()"
});
formatter.result({
  "duration": 3247685568,
  "status": "passed"
});
formatter.match({
  "location": "MarketSearch.userClickOnContinueToCheckout()"
});
formatter.result({
  "duration": 373416847,
  "status": "passed"
});
formatter.match({
  "location": "MarketSearch.userVerifyThePaymentPage()"
});
formatter.result({
  "duration": 66813058,
  "status": "passed"
});
formatter.match({
  "location": "HotelStepDefs.userCloseBrowser()"
});
formatter.result({
  "duration": 7804500300,
  "status": "passed"
});
formatter.scenario({
  "line": 87,
  "name": "Room Type Calendar search- Flexible date search for specific property Search (Room Type Calendar)",
  "description": "",
  "id": "exact-date-market-search;room-type-calendar-search--flexible-date-search-for-specific-property-search-(room-type-calendar);;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 65,
  "name": "User tests in given chrome",
  "matchedColumns": [
    1
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 66,
  "name": "User opens given urlroomavailtrue",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 67,
  "name": "User Select Flexible Date Search",
  "keyword": "When "
});
formatter.step({
  "line": 68,
  "name": "Select Market - \"Las Vegas\"",
  "keyword": "And "
});
formatter.step({
  "line": 69,
  "name": "Select Property \"Flamingo Las Vegas\"",
  "keyword": "And "
});
formatter.step({
  "line": 70,
  "name": "User select the Month",
  "keyword": "And "
});
formatter.step({
  "line": 71,
  "name": "Room count \"1\"",
  "keyword": "And "
});
formatter.step({
  "line": 72,
  "name": "Guest \"2\" Adults,  \"0\" Children",
  "keyword": "And "
});
formatter.step({
  "line": 73,
  "name": "User enters promotion",
  "keyword": "And "
});
formatter.step({
  "line": 74,
  "name": "Click on Search",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 75,
      "value": "#    And  Verify whether the Deal applied banner is shown in Rate Calendar page"
    }
  ],
  "line": 76,
  "name": "User select Dates from the calendar",
  "keyword": "And "
});
formatter.step({
  "line": 77,
  "name": "User click on Get Trip price button",
  "keyword": "And "
});
formatter.step({
  "line": 78,
  "name": "User click on Book it from pricing details overlay",
  "keyword": "And "
});
formatter.step({
  "line": 79,
  "name": "User verify Trip Summary Page",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 80,
      "value": "#    And  User adds BoB Voucher to cart"
    }
  ],
  "line": 81,
  "name": "User click on continue to Checkout",
  "keyword": "And "
});
formatter.step({
  "line": 82,
  "name": "User verify the payment page",
  "keyword": "Then "
});
formatter.step({
  "line": 83,
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
  "duration": 2806691299,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "urlroomavailtrue",
      "offset": 17
    }
  ],
  "location": "HotelStepDefs.userOpensGivenUrls(String)"
});
formatter.result({
  "duration": 8826136419,
  "status": "passed"
});
formatter.match({
  "location": "MarketSearch.userSelectFlexibleDateSearch()"
});
formatter.result({
  "duration": 302604783,
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
  "duration": 377373718,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Flamingo Las Vegas",
      "offset": 17
    }
  ],
  "location": "HotelStepDefs.selectProperty(String)"
});
formatter.result({
  "duration": 282720491,
  "status": "passed"
});
formatter.match({
  "location": "MarketSearch.userSelectTheMonth()"
});
formatter.result({
  "duration": 282287801,
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
  "duration": 181886982,
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
  "duration": 260781327,
  "status": "passed"
});
formatter.match({
  "location": "MarketSearch.userEntersPromotion()"
});
formatter.result({
  "duration": 147448965,
  "status": "passed"
});
formatter.match({
  "location": "HotelStepDefs.clickOnSearch()"
});
formatter.result({
  "duration": 185728253,
  "status": "passed"
});
formatter.match({
  "location": "MarketSearch.userSelectDatesFromTheCalendar()"
});
formatter.result({
  "duration": 6933849212,
  "status": "passed"
});
formatter.match({
  "location": "MarketSearch.userClickOnGetTripPriceButton()"
});
formatter.result({
  "duration": 638302516,
  "status": "passed"
});
formatter.match({
  "location": "MarketSearch.userClickOnBookItFromPricingDetailsOverlay()"
});
formatter.result({
  "duration": 1104645070,
  "status": "passed"
});
formatter.match({
  "location": "MarketSearch.userVerifyTripSummaryPage()"
});
formatter.result({
  "duration": 3249688582,
  "status": "passed"
});
formatter.match({
  "location": "MarketSearch.userClickOnContinueToCheckout()"
});
formatter.result({
  "duration": 360048292,
  "status": "passed"
});
formatter.match({
  "location": "MarketSearch.userVerifyThePaymentPage()"
});
formatter.result({
  "duration": 78108913,
  "status": "passed"
});
formatter.match({
  "location": "HotelStepDefs.userCloseBrowser()"
});
formatter.result({
  "duration": 5887312082,
  "status": "passed"
});
});