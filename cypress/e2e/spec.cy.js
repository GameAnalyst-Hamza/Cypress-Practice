/// <reference types="cypress"/>
Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

describe("My Test", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it.skip("Interation with Elements", () => {
    cy.get("#firstName").type("Cypress");
    // cy.get('[data-cy="firstName"]').type("Hamza");
    // cy.get('[data-cy="userForm"]').find("#firstName").type("Hamza");

    //FInd the next field next to username automatically
    cy.get("#userForm").find("#userName-wrapper").next();

    //Search and Reach to first div
    cy.get("#userForm").find("div").first();

    //Search and Reach to last div
    cy.get("#userForm").find("div").last();

    //Parent of the label
    cy.get("#userForm").find("#userName-label").parent();

    //Childeren of Label
    cy.get("#userForm").find("#userName-wrapper").children();

    //Get specific div
    cy.get("#userForm").find("#userName-wrapper").find("div").eq(0);
  });

  it.only("Interaction with Interactive Elements", () => {
    //Finding Radio Button
    cy.get("#genterWrapper").find('[value="Male"]').click({ force: true });

    //Finding Radio Button and applying check method
    cy.get("#genterWrapper").find('[value="Male"]').check({ force: true });

    //Finding Checkbox and applying check method
    cy.get("#hobbiesWrapper")
      .find("#hobbies-checkbox-1")
      .check({ force: true });

    //Finding Checkbox and applying uncheck method
    cy.get("#hobbiesWrapper")
      .find("#hobbies-checkbox-1")
      .uncheck({ force: true });
  });
});
