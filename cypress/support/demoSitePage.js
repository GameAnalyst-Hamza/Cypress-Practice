export class demoSitePage {
  laptopPage() {
    cy.get(".list-group").find("a").contains("Laptops").click();
  }

  monitorPage() {
    cy.get(".list-group").find("a").contains("Monitor").click();
  }

  phonesPage() {
    cy.get(".list-group").find("a").contains("Phones").click();
  }
}

export const navigateTo = new demoSitePage();
