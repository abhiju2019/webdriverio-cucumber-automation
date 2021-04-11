Feature: Provide improved search results in the Website


  Scenario: As a user, I can view the Search section in the homepage

    Given I am on the Desktop or in a mobile device
    When I navigate to the Homepage
    Then I should see a "Search" section



  Scenario: As a user, I can search for an item in the Search section of the homepage

    Given I am on the Desktop or in a mobile device
    When I navigate to the Homepage
    When I search with a text "paint"
    When I click the "Search" button
    Then I should see some search results


  Scenario: As a user, I can not search with a blank text

    Given I am on the Desktop or in a mobile device
    When I navigate to the Homepage
    When I click the "Search" button
    Then I should see a flash message saying "Please enter search keywords"