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
  "duration": 20934173324,
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
  "duration": 416673419,
  "status": "passed"
});
formatter.match({
  "location": "HotelStepDefs.selectCheckInCheckoutDates()"
});
formatter.result({
  "duration": 294731014,
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
  "duration": 137898995,
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
  "duration": 293092086,
  "status": "passed"
});
formatter.match({
  "location": "HotelStepDefs.clickOnSearch()"
});
formatter.result({
  "duration": 473934346,
  "status": "passed"
});
formatter.match({
  "location": "HotelStepDefs.verifyFlexCalendarPage()"
});
formatter.result({
  "duration": 4913694286,
  "status": "passed"
});
formatter.match({
  "location": "HotelStepDefs.selectAnyRateFromTheTable()"
});
formatter.result({
  "duration": 544934395,
  "status": "passed"
});
formatter.match({
  "location": "HotelStepDefs.clickSelectRoomButtonFromChooseYourCheckOutDateOverlay()"
});
formatter.result({
  "duration": 6011386606,
  "status": "passed"
});
formatter.match({
  "location": "HotelStepDefs.selctRoomOptions()"
});
formatter.result({
  "duration": 399453871,
  "status": "passed"
});
formatter.match({
  "location": "HotelStepDefs.selectRoomForumClassicRoom()"
});
formatter.result({
  "duration": 4459000329,
  "status": "passed"
});
formatter.match({
  "location": "HotelStepDefs.verifyItineraryPage()"
});
formatter.result({
  "duration": 268000929,
  "status": "passed"
});
formatter.match({
  "location": "HotelStepDefs.continueToCheckout()"
});
formatter.result({
  "duration": 406178121,
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
  "duration": 2298050464,
  "status": "passed"
});
formatter.match({
  "location": "HotelStepDefs.removeRoom()"
});
formatter.result({
  "duration": 4708638674,
  "status": "passed"
});
formatter.match({
  "location": "HotelStepDefs.updateRoomInCart()"
});
formatter.result({
  "duration": 347998336,
  "status": "passed"
});
formatter.match({
  "location": "HotelStepDefs.selectRoomForumClassicRoom()"
});
formatter.result({
  "duration": 5413171385,
  "status": "passed"
});
formatter.match({
  "location": "HotelStepDefs.continueToCheckout()"
});
formatter.result({
  "duration": 369014320,
  "status": "passed"
});
formatter.match({
  "location": "HotelStepDefs.verifyPaymentPage()"
});
formatter.result({
  "duration": 1586600656,
  "status": "passed"
});
formatter.after({
  "duration": 3778554567,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "Flexible date search for specific property",
  "description": "",
  "id": "hotel-features;flexible-date-search-for-specific-property",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 30,
  "name": "User Selects Flexible Date Search",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "Select Market - \"Las Vegas\"",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "Select Property \"Flamingo Las Vegas\"",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "Select Check-in \u0026 Checkout dates",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "Room count \"1\"",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "Guest \"2\" Adults,  \"0\" Children",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "Click on Search",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "Select Dates from the calendar",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "Click on Select Room",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "Selct Room Options",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "Select room Fab Room  1 King  Non-Smoking",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "Verify Itinerary Page",
  "keyword": "Then "
});
formatter.step({
  "line": 42,
  "name": "Select a room from UPSELL listing and click Upgrade",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "Check whether the room added was upgraded with the new room",
  "keyword": "Then "
});
formatter.step({
  "line": 44,
  "name": "Continue to Checkout",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "Check the room details added to cart as Room \"1\" and Guests \"2\"",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "Verify Payment Page",
  "keyword": "And "
});
formatter.match({
  "location": "HotelStepDefs.userSelectsFlexibleDateSearch()"
});
formatter.result({
  "duration": 12966375506,
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
  "duration": 448348918,
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
  "duration": 312505874,
  "status": "passed"
});
formatter.match({
  "location": "HotelStepDefs.selectCheckInCheckoutDates()"
});
formatter.result({
  "duration": 324793513,
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
  "duration": 234120387,
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
  "duration": 261248048,
  "status": "passed"
});
formatter.match({
  "location": "HotelStepDefs.clickOnSearch()"
});
formatter.result({
  "duration": 262184734,
  "status": "passed"
});
formatter.match({
  "location": "HotelStepDefs.selectDatesFromTheCalendar()"
});
formatter.result({
  "duration": 8486866428,
  "status": "passed"
});
formatter.match({
  "location": "HotelStepDefs.clickOnSelectRoom()"
});
formatter.result({
  "duration": 267890191,
  "status": "passed"
});
formatter.match({
  "location": "HotelStepDefs.selctRoomOptions()"
});
formatter.result({
  "duration": 7798422653,
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
  "duration": 4348299761,
  "status": "passed"
});
formatter.match({
  "location": "HotelStepDefs.verifyItineraryPage()"
});
formatter.result({
  "duration": 1025437957,
  "status": "passed"
});
formatter.match({
  "location": "HotelStepDefs.selectARoomFromUPSELLListingAndClickUpgrade()"
});
formatter.result({
  "duration": 4173454659,
  "status": "passed"
});
formatter.match({
  "location": "HotelStepDefs.checkWhetherTheRoomAddedWasUpgradedWithTheNewRoom()"
});
formatter.result({
  "duration": 67062624,
  "status": "passed"
});
formatter.match({
  "location": "HotelStepDefs.continueToCheckout()"
});
formatter.result({
  "duration": 309862738,
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
  "duration": 1677773997,
  "status": "passed"
});
formatter.match({
  "location": "HotelStepDefs.verifyPaymentPage()"
});
formatter.result({
  "duration": 224655766,
  "status": "passed"
});
formatter.after({
  "duration": 903056919,
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
formatter.result({
  "duration": 11880338266,
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
  "duration": 2403939045,
  "status": "passed"
});
formatter.match({
  "location": "MarketSearch.userEnterCheckinCheckoutDates()"
});
formatter.result({
  "duration": 2297317970,
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
  "duration": 376593147,
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
  "duration": 330868459,
  "status": "passed"
});
formatter.match({
  "location": "MarketSearch.userEntersPromotion()"
});
formatter.result({
  "duration": 258051220,
  "status": "passed"
});
formatter.match({
  "location": "HotelStepDefs.clickOnSearch()"
});
formatter.result({
  "duration": 692742584,
  "status": "passed"
});
formatter.match({
  "location": "MarketSearch.userVerifyMarketListingPage()"
});
formatter.result({
  "duration": 4338407312,
  "status": "passed"
});
formatter.match({
  "location": "MarketSearch.userSelectPropertyFlamingoLasVegas()"
});
formatter.result({
  "duration": 1204362012,
  "status": "passed"
});
formatter.match({
  "location": "MarketSearch.userVerifyRoomListingPage()"
});
formatter.result({
  "duration": 4859178591,
  "status": "passed"
});
formatter.match({
  "location": "MarketSearch.userSelectAccessibilityFilter()"
});
formatter.result({
  "duration": 300201490,
  "status": "passed"
});
formatter.match({
  "location": "MarketSearch.userSelectRoom()"
});
formatter.result({
  "duration": 448365123,
  "status": "passed"
});
formatter.match({
  "location": "MarketSearch.userVerifyTripSummaryPage()"
});
formatter.result({
  "duration": 5090930256,
  "status": "passed"
});
formatter.match({
  "location": "MarketSearch.userAddsBoBVoucherToCart()"
});
formatter.result({
  "duration": 334082033,
  "status": "passed"
});
formatter.match({
  "location": "MarketSearch.userClickOnContinueToCheckout()"
});
formatter.result({
  "duration": 280464669,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: Element is not clickable at point (1064, 196). Other element would receive the click: \u003cdiv id\u003d\"opaque\" style\u003d\"display: block;\"\u003e...\u003c/div\u003e\n  (Session info: chrome\u003d56.0.2924.87)\n  (Driver info: chromedriver\u003d2.25.426923 (0390b88869384d6eb0d5d09729679f934aab9eed),platform\u003dWindows NT 6.1.7600 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 172 milliseconds\nBuild info: version: \u00273.0.1\u0027, revision: \u00271969d75\u0027, time: \u00272016-10-18 09:49:13 -0700\u0027\nSystem info: host: \u0027ADMIN-PC\u0027, ip: \u0027192.168.0.3\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_65\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.25.426923 (0390b88869384d6eb0d5d09729679f934aab9eed), userDataDir\u003dC:\\Users\\ADMIN\\AppData\\Local\\Temp\\scoped_dir7188_21262}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d56.0.2924.87, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: f6555e6582980f358656ac92dc3c1d20\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:422)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:216)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:168)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:635)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:274)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat Steps.Hotel.HotelStepDefsSupports.userClickOnContinueToCheckout(HotelStepDefsSupports.java:173)\r\n\tat Steps.Hotel.MarketSearch.userClickOnContinueToCheckout(MarketSearch.java:97)\r\n\tat ✽.And User click on continue to Checkout(Hotel/Hotelfunctionalities.feature:23)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 905788647,
  "status": "passed"
});
formatter.uri("Shows/Shows.feature");
formatter.feature({
  "line": 1,
  "name": "",
  "description": "Shows Features",
  "id": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Exact date search",
  "description": "",
  "id": ";exact-date-search",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user go to landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User selects Exact date",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User selects below \"\u003cmarkets\u003e\" and \"\u003chotels\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User selectes dates which is one month head",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User click on Search",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "Search results should be displayed",
  "keyword": "Then "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": ";exact-date-search;",
  "rows": [
    {
      "cells": [
        "markets",
        "hotels"
      ],
      "line": 13,
      "id": ";exact-date-search;;1"
    },
    {
      "cells": [
        "Las Vegas",
        "Caesars"
      ],
      "line": 14,
      "id": ";exact-date-search;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 14,
  "name": "Exact date search",
  "description": "",
  "id": ";exact-date-search;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user go to landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User selects Exact date",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User selects below \"Las Vegas\" and \"Caesars\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User selectes dates which is one month head",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User click on Search",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "Search results should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "HotelStepDefs.userGoToLandingPage()"
});
formatter.result({
  "duration": 15990969150,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 921160214,
  "status": "passed"
});
});