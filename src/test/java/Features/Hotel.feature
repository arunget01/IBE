Feature:
  Hotel Features

  Scenario Outline: Exact date search
    Given user go to landing page
    And User selects Exact date
    And User selects below "<markets>" and "<hotels>"
    And User selectes dates which is one month head
    When User click on Search
    Then Search results should be displayed

    Examples:
      |markets|hotels|
    | Las Vegas     |  Caesars    |
    | Las Vegas     |    The Linq  |





