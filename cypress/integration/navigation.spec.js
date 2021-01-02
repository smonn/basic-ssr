describe("on navigation success", () => {
  // Although these tests appear to be similar, we want to avoid getting clever here as the tests will most likely change over time, and each page will evolve separately.

  it("navigates to /", () => {
    cy.visit("/about");
    cy.contains("h1", "Home").should("not.exist");
    cy.contains("a", "Home").should("exist").click();
    cy.url().should("eq", Cypress.config().baseUrl + "/");
    cy.contains("h1", "Home").should("exist");
  });

  it("navigates to /about", () => {
    cy.visit("/");
    cy.contains("h1", "About").should("not.exist");
    cy.contains("a", "About").should("exist").click();
    cy.url().should("eq", Cypress.config().baseUrl + "/about");
    cy.contains("h1", "About").should("exist");
  });

  it("navigates to /register", () => {
    cy.visit("/");
    cy.contains("h1", "Register").should("not.exist");
    cy.contains("a", "Register").should("exist").click();
    cy.url().should("eq", Cypress.config().baseUrl + "/register");
    cy.contains("h1", "Register").should("exist");
  });
});

describe("on navigation failure", () => {
  it("shows a 404 page", () => {
    // Must disable `failOnStatusCode` since this page will yield a 404 status code.
    cy.visit("/this-page-does-not-exist", { failOnStatusCode: false });
    cy.contains("h1", "Page Not Found").should("exist");
    cy.contains("a", "Return to home").should("exist").click();
    cy.url().should("eq", Cypress.config().baseUrl + "/");
  });
});
