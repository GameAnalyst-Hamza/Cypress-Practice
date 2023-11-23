/// <reference types="cypress"/>
Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

describe("My Test", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it.only("Each Method", () => {
    // cy.get('[id="hobbiesWrapper"]');
    cy.get("#hobbiesWrapper").each((checkBoxDiv) => {
      cy.wrap(checkBoxDiv).find('[type="checkbox"]').check({ force: true });
    });
  });
});
