$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Hotel/Hotel.feature");
formatter.feature({
  "line": 1,
  "name": "",
  "description": "Hotel Features",
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
    },
    {
      "cells": [
        "Las Vegas",
        "The Linq"
      ],
      "line": 15,
      "id": ";exact-date-search;;3"
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
  "duration": 13832708160,
  "status": "passed"
});
formatter.match({
  "location": "HotelStepDefs.userSelectsExactDate()"
});
formatter.result({
  "duration": 7344933071,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Las Vegas",
      "offset": 20
    },
    {
      "val": "Caesars",
      "offset": 36
    }
  ],
  "location": "HotelStepDefs.userSelectsBelowAnd(String,String)"
});
formatter.result({
  "duration": 8341182572,
  "status": "passed"
});
formatter.match({
  "location": "HotelStepDefs.userSelectesDatesWhichIsOneMonthHead()"
});
formatter.result({
  "duration": 3558652132,
  "status": "passed"
});
formatter.match({
  "location": "HotelStepDefs.userClickOnSearch()"
});
formatter.result({
  "duration": 9613136742,
  "status": "passed"
});
formatter.match({
  "location": "HotelStepDefs.searchResultsShouldBeDisplayed()"
});
formatter.result({
  "duration": 3058245913,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Exact date search",
  "description": "",
  "id": ";exact-date-search;;3",
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
  "name": "User selects below \"Las Vegas\" and \"The Linq\"",
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
  "duration": 19824228887,
  "status": "passed"
});
formatter.match({
  "location": "HotelStepDefs.userSelectsExactDate()"
});
formatter.result({
  "duration": 5211750089,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Las Vegas",
      "offset": 20
    },
    {
      "val": "The Linq",
      "offset": 36
    }
  ],
  "location": "HotelStepDefs.userSelectsBelowAnd(String,String)"
});
formatter.result({
  "duration": 5870875963,
  "status": "passed"
});
formatter.match({
  "location": "HotelStepDefs.userSelectesDatesWhichIsOneMonthHead()"
});
formatter.result({
  "duration": 2218523460,
  "status": "passed"
});
formatter.match({
  "location": "HotelStepDefs.userClickOnSearch()"
});
formatter.result({
  "duration": 5560430959,
  "status": "passed"
});
formatter.match({
  "location": "HotelStepDefs.searchResultsShouldBeDisplayed()"
});
formatter.result({
  "duration": 3152871080,
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
  "duration": 12818464040,
  "status": "passed"
});
formatter.match({
  "location": "HotelStepDefs.userSelectsExactDate()"
});
formatter.result({
  "duration": 3868008665,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Las Vegas",
      "offset": 20
    },
    {
      "val": "Caesars",
      "offset": 36
    }
  ],
  "location": "HotelStepDefs.userSelectsBelowAnd(String,String)"
});
formatter.result({
  "duration": 3728627068,
  "status": "passed"
});
formatter.match({
  "location": "HotelStepDefs.userSelectesDatesWhichIsOneMonthHead()"
});
formatter.result({
  "duration": 2244209764,
  "status": "passed"
});
formatter.match({
  "location": "HotelStepDefs.userClickOnSearch()"
});
formatter.result({
  "duration": 4603623557,
  "status": "passed"
});
formatter.match({
  "location": "HotelStepDefs.searchResultsShouldBeDisplayed()"
});
formatter.result({
  "duration": 2744108210,
  "status": "passed"
});
});