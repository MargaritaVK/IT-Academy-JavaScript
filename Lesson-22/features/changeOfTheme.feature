Feature: Check switching theme button

  Scenario: Check that theme changes from light to dark by clicking on theme switcher

    Given I navigate on https://webdriver.io/ page
    When I click "Header > colorButton"
    Then I expect "MainPage > mainPageSubtitle" element should contain text "currently dark mode"