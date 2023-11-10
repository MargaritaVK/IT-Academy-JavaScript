Feature: Switch to Deutsch

  Scenario: Possibility to switch language to Deutsch

    Given I navigate on https://webdriver.io/ page
    When I click "Header > languageMenuButton"
    When I click "Header > deutschLanguageButton"
    Then I expect "MainPage > mainPageSubtitle" element should contain text "Test-Framework für Browser"