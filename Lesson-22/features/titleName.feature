Feature: Verify right title name

  Scenario Outline: Verify that title name is Stack Overflow

    Given I navigate on https://webdriver.io/ page
    When I click "Header > tabCommunity"
    And I click "Header > tabStackOverflow"
    Then I expect "Header > titleStackOverflowPage" element should equal text "Stack Overflow"