Feature: Home screen 

@tag1
    Scenario: Validate that product added succesfully
    Given Open website
    And   User click on add product button
    And   User enter name,description,category,quantity,unit price, and supplier
    Then  Verify that prouduct added successfully

@tag2
    Scenario: Validate the delete functionality
    Given Open website
    And   User click on delete icon

 @tag3
    Scenario: Validate the view product functionality
    Given Open website
    And   User click on view  icon
    Then  Verify that the product details on the previous page are same as on this page

    @tag4
    Scenario: Validate the edit product functionality
    Given Open website
    And   User click on edit  icon
    Then  verify that user is able to edit the record successfuly
    