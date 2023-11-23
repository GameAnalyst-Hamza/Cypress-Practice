/// <reference types="cypress"/>
Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

describe("My Test", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it.only("Waits", () => {
    // cy.get('[class="cypress"]');
    // cy.get(".cypress");
    // cy.get(".class-cypress", { timeout: 10000 }); // for particular command

    cy.wait(5000);

    cy.get(".list-group").find("a").contains("Laptops");
  });
});
