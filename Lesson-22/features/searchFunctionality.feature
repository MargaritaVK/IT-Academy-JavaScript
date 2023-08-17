Feature: Verify search functionality

  Scenario: Verify search result for a query
    
    Given I navigate on https://webdriver.io/ page
    When I click "Header > searchField"
    And I fill field "SearchPage > searchInput" with text "WebDriver Options"
    And I wait for search results in "SearchPage > firstSearchOutput"
    Then I expect "SearchPage > firstSearchOutput" element should equal text "WebDriver Options"