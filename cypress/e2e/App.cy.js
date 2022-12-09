// https://docs.cypress.io/api/introduction/api.html

describe("End to end test ", () => {
  it("visits the app root url", () => {
    cy.visit("/");
    // select the quizz
    cy.contains("h2", "What quizz did you want to try ?");
    cy.get("#quizz-id-1").should("have.text", "math");
    cy.get("#quizz-id-1").click();
    // answering
    cy.get(".status").should("have.text", "1 out of 3 questions answered");
    cy.get(".question").contains("What is 5 + 5 ?").should("be.visible");
    cy.get(".answer")
      .contains(/^[1][0]$/)
      .should("be.visible");
    cy.get(".answer")
      .contains(/^[1][0]$/)
      .filter(":visible")
      .click();
    cy.get(".question").contains("What is 5 * 5 ?").should("be.visible");
    cy.get(".answer")
      .contains(/^[2][5]$/)
      .should("be.visible");
    cy.get(".answer")
      .contains(/^[2][5]$/)
      .filter(":visible")
      .click();
    cy.get(".question").contains("What is 5 / 5 ?").should("be.visible");
    cy.get(".answer").contains(/^[1]$/).should("be.visible");
    cy.get(".answer").contains(/^[1]$/).filter(":visible").click();
    // get the result
    cy.get(".title").contains("Wow, you're a genius!").should("be.visible");
    cy.get(".desc")
      .contains("Studying has definitely paid off for you!")
      .should("be.visible");
    // redo the quizz
    cy.get(".redo-btn").click();
    // anwsering the quizz again but badly
    cy.get(".answer").contains(/^[5]$/).should("be.visible");
    cy.get(".answer").contains(/^[5]$/).filter(":visible").click();
    cy.get(".answer")
      .contains(/^[5][5]$/)
      .should("be.visible");
    cy.get(".answer")
      .contains(/^[5][5]$/)
      .filter(":visible")
      .click();
    cy.get(".answer")
      .contains(/^[1][5]$/)
      .should("be.visible");
    cy.get(".answer")
      .contains(/^[1][5]$/)
      .filter(":visible")
      .click();
    // change quizz
    cy.get(".change-quizz-btn").click();
    cy.get("#quizz-id-1").should("have.text", "math");
    cy.get("#quizz-id-2").should("have.text", "default");
  });
});
