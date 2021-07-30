Feature: Navigation Component
    # """
    # Notes:

    # Panel is a navigation section containing children that can be expanded/closed.
    # Route is link to a path in current application as opposed to an external url.
    # """
    @unit
    Scenario: Active State Detection for Top Level Route On First Page Load

        Given I have a <variant> navigation component in my Application
        When I load the application on the "contact" route
        Then the navigation item labelled "contact" is in an active state

        Examples:
            | Global     |
            | Vertical   |
            | Horizontal |

    @unit
    Scenario: Active State Detection for Nested Routes On First Page Load

        Given I have a <variant> navigation component in my Application
        When I load the application on the "about" route
        And I click the "Home" panel
        Then the "home" panel of the navigation is in an active state
        And the navigation item labelled "about" is in an active state

        Examples:
            | Global     |
            | Vertical   |
            | Horizontal |

    @prod @desktop-only
    Scenario Outline: Active State Detection for Top Level Route On Route Change
        Given I have a "<variant>" navigation component in my Application
        When I click the "Contact" link
        Then the navigation item labelled "Contact" is in an active state

        Examples:
            | variant    |
            | Global     |
            | Horizontal |
            | Vertical   |

    @prod @desktop-only
    Scenario Outline: Active State Detection for Nested Routes On Route Change For Some Variants
        Given I have a "<variant>" navigation component in my Application
        When I click the "Home" panel
        And I click the "My Account" link
        And I click the "Home" panel
        Then the navigation item labelled "My Account" is in an active state

        Examples:
            | variant    |
            | Global     |
            | Horizontal |

    @prod @desktop-only
    Scenario: Active State Detection for Nested Routes On Route Change For Vertical Variant
        Given I have a "Vertical" navigation component in my Application
        When I click the "Home" panel
        And I click the "My Account" link
        Then the navigation item labelled "My Account" is in an active state

    @prod @desktop-only
    Scenario: Open Panels Remain Open After Route Change For Vertical Variant
        Given I have a "Vertical" navigation component in my Application
        And I click the "Home" panel
        And I click the "My Account" link
        Then the Home panel is expanded

    @prod @desktop-only
    Scenario Outline: Opening A Top Level Panel Closes Other Open Panels For Some Navigation Variants
        Given I have a "<variant>" navigation component in my Application
        When I click the "Home" panel
        And I click the "About" panel
        Then the Home panel is closed

        Examples:
            | variant                 |
            | Global Desktop View     |
            | Horizontal Desktop View |

    @prod @desktop-only
    Scenario Outline: Opening A Top Level Panel with Nested Active Route Opens All Panels to That Item For Some Navigation Variants
        Given I have a "<variant>" navigation component in my Application
        When I click the "Home" panel
        And I click the "My Orders" panel
        And I click the "Delivered" link
        And I click the "Home" panel
        Then the Home panel is expanded
        And the My Orders panel is expanded

        Examples:
            | variant     |
            | Global      |
            | Horizontal  |

    @prod @desktop-only
    Scenario: Opening A Top Level Panel with Nested Active Route Opens All Panels to That Item For Vertical Variant
        Given I have a "Vertical" navigation component in my Application
        When I click the "Home" panel
        And I click the "My Orders" panel
        And I click the "Delivered" link
        And I click the "Home" panel
        And I click the "Home" panel
        Then the Home panel is expanded
        And the My Orders panel is expanded

    @prod @desktop-only
    Scenario Outline: Closing A Panel With Panel Children That Are Expanded Closes Those Children
        Given I have a "<variant>" navigation component in my Application
        When I click the "Home" panel
        And I click the "My Orders" panel
        And I click the "Home" panel
        And I click the "Home" panel
        Then the Home panel is expanded
        And the My Orders panel is closed

        Examples:
            | variant     |
            | Global      |
            | Horizontal  |
            | Vertical    |

    @mobile
    Scenario Outline: Active State Detection for Top Level Route On Route Change
        Given I have a "<variant>" navigation component in my Application
        When I click the mobile menu
        And I click the "Contact" link
        And I click the mobile menu
        Then the navigation item labelled "Contact" is in an active state

        Examples:
            | variant    |
            | Global     |
            | Horizontal |
            | Vertical   |

    @mobile
    Scenario Outline: Active State Detection for Nested Routes On Route Change
        Given I have a "<variant>" navigation component in my Application
        When I click the mobile menu
        And I click the "Home" panel
        And I click the "My Account" link
        And I click the mobile menu
        Then the navigation item labelled "My Account" is in an active state

        Examples:
            | variant    |
            | Global     |
            | Horizontal |
            | Vertical   |

    @mobile
    Scenario Outline: Open Panels Remain Open After Route Change On Mobile
        Given I have a "<variant>" navigation component in my Application
        When I click the mobile menu
        And I click the "Home" panel
        And I click the "My Account" link
        And I click the mobile menu
        Then the Home panel is expanded

        Examples:
            | variant    |
            | Global     |
            | Horizontal |
            | Vertical   |

    @mobile
    Scenario Outline: Opening A Top Level Panel with Nested Active Route Opens All Panels to That Item
        Given I have a "<variant>" navigation component in my Application
        When I click the mobile menu
        And I click the "Home" panel
        And I click the "My Orders" panel
        And I click the "Delivered" link
        And I click the mobile menu
        Then the Home panel is expanded
        And the My Orders panel is expanded

        Examples:
            | variant     |
            | Global      |
            | Horizontal  |
            | Vertical    |

    @mobile
    Scenario Outline: Closing A Panel With Panel Children That Are Expanded Closes Those Children
        Given I have a "<variant>" navigation component in my Application
        When I click the mobile menu
        And I click the "Home" panel
        And I click the "My Orders" panel
        And I click the "Home" panel
        And I click the "Home" panel
        Then the Home panel is expanded
        And the My Orders panel is closed

        Examples:
            | variant     |
            | Global      |
            | Horizontal  |
            | Vertical    |
