Feature: Dropdown multi Component

#  Indeterminate means hyphen
  @unit
  Scenario Outline: Select all checkbox state
    Given Dropdown multi is configured with options list
    When <number> number of items are selected
    Then Select all checkbox is in <checkboxState> state

    Examples:
      | number  | checkboxState |
      | none    | unchecked     |
      | all     | checked       |
      | some    | indeterminate |

  @unit
  Scenario: Select multiple items
    Given Dropdown multi is configured with options list
    When France and Ireland are selected
    Then The Dropdown displays "France, Ireland"

  @unit
  Scenario: Deselect item
    Given Dropdown multi is configured with options list
    And France and Ireland are initially selected
    When France is deselected
    Then The Dropdown displays "France"

  @unit
  Scenario: Set fieldset legend
    Given Dropdown is configured with fieldset legend
    Then The Dropdown fieldset legend displays given value

  @prod
  Scenario: Select option from Dropdown
    Given Dropdown multi is configured with options list
    When The Dropdown is pressed
    And "England" is selected from the multi list
    Then The Dropdown displays "England"

  @prod
  Scenario: Select multiple options from Dropdown
    Given Dropdown multi is configured with options list
    When The Dropdown is pressed
    And "Ireland" and "Germany" are selected from the list
    Then The Dropdown displays "Ireland, Germany"

  @prod
  Scenario: Select group of options from Dropdown
    Given Dropdown multi is configured with grouped options list
    When The Dropdown is pressed
    And "Ireland" "Select Group" checkbox is pressed
    Then The Dropdown displays "Dublin, Meath, Westmeath"

  @prod
  Scenario: Select all options from Dropdown
    Given Dropdown multi is configured with grouped options list
    When The Dropdown is pressed
    And "Select All" is selected from the multi list
    Then The Dropdown displays "England, Scotland, Dublin, Meath, Westmeath, Spain, Paris, Nice, Germany"

  @prod
  Scenario: Select all options from Dropdown
    Given Dropdown multi is configured with options list
    When The Dropdown is pressed
    And "Select All" is selected from the multi list
    Then The Dropdown displays "England, Ireland, Scotland, France, Germany"

  @prod
  Scenario Outline: Tab navigation
    Given Dropdown multi is configured with options list
    When The Dropdown is pressed
    And The <initiallyFocused> item is tabbed onto
    And The <key> key is pressed
    Then The Dropdown multi item <focused> has focus styling

    Examples:
      | initiallyFocused  | key         | focused |
      | third             | Tab         | France  |
      | third             | ShiftTab    | Ireland |
      | third             | Home        | England |
      | third             | End         | Germany |

  @prod
  Scenario Outline: Tab beginning or end of list
    Given Dropdown multi is configured with options list
    When The Dropdown is pressed
    And The <initiallyFocused> item is tabbed onto
    And The <key> key is pressed
    Then The Dropdown multi <result>

    Examples:
      | initiallyFocused  | key         | result                                  |
      | selectAll         | ShiftTab    | focuses on the trigger                  |
      | last              | Tab         | option "England" visibility is "false"  |

  @prod
  Scenario Outline: Keyboard character navigation
    Given Dropdown multi is configured with options list
    When The Dropdown is pressed
    And The <key> key is pressed
    Then The Dropdown multi item <focused> has focus styling

    Examples:
      | key   | focused   |
      | I     | Ireland   |
      | G     | Germany   |
      | E     | England   |
