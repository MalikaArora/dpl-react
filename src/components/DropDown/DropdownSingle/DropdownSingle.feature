Feature: Dropdown Component

  @unit
  Scenario: Dropdown Disabled
    Given Dropdown is Disabled
    When User interacts with the Dropdown
    Then The Dropdown cannot be interacted with

  @unit
  Scenario: Dropdown has placeholder text
    Given Dropdown is configured with placeholder text
    Then The Dropdown displays with provided placeholder text

  @unit
  Scenario: Reopen dropdown with selected option
    Given Dropdown is configured with options list
    When The Tab key is pressed
    And The Space key is pressed
    Then The dropdown is visible

  @unit
  Scenario: Dropdown opened with keyboard
    Given Dropdown is configured with options list
    When I select an option from the list
    And I reopen the dropdown
    Then The selected option is highlighted

  @prod
  Scenario: Select option from Dropdown
    Given Dropdown is configured with options list
    When The Dropdown is pressed
    And "England" is selected from the list
    Then The Dropdown displays "England"

  @prod
  Scenario: Dropdown opened with mouse click
    Given Dropdown is configured with options list
    When The Dropdown is pressed
    Then The Dropdown option "England" visibility is "true"

  @prod
  Scenario: Dropdown opened with keyboard
    Given Dropdown is configured with options list
    When The Tab key is pressed
    And The Enter key is pressed
    Then The Dropdown option "England" visibility is "true"

  @prod
  Scenario Outline: Close Dropdown
    Given Dropdown is configured with options list
    When The Dropdown is pressed
    And The <key> key is pressed
    Then The Dropdown option "England" visibility is "false"

    Examples:
      | key |
      | Tab |
      | Esc |

  @prod
  Scenario Outline: Navigate around options
    Given Dropdown is configured with options list
    When The Dropdown is pressed
    And The <position> item is focused
    And The <key> key is pressed
    Then The Dropdown focuses on <focused> item

    Examples:
      | position  | key   | focused |
      | first     | Up    | Germany |
      | last      | Down  | England |

  @prod
  Scenario: Dropdown Required
    Given Dropdown is configured as required
    When The Dropdown is pressed
    And The Tab key is pressed
    Then The Dropdown displays with error styling

  @prod
  Scenario Outline: Keyboard navigation
    Given Dropdown is configured with options list
    When The Dropdown is pressed
    And The <initiallyFocused> item is focused
    And The <key> key is pressed
    Then The Dropdown focuses on <focused> item

    Examples:
      | initiallyFocused  | key   | focused |
      | third             | Up    | Ireland |
      | third             | Down  | France  |
      | third             | Home  | England |
      | third             | End   | Germany |

  @prod
  Scenario Outline: Keyboard character navigation
    Given Dropdown is configured with options list
    When The Dropdown is pressed
    And The <key> key is pressed
    Then The Dropdown focuses on <focused> item

    Examples:
      | key   | focused   |
      | I     | Ireland   |
      | G     | Germany   |
      | E     | England   |

