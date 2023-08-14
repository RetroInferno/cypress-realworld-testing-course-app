describe("home page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000")
  })
  it("VISIT AND the h1 contains the correct text", () => {
    cy.get("h1").contains("Testing Next.js Applications with Cypress")
  })

  it("the h1 contains the correct text", () => {
    cy.get("h1").contains("Testing Next.js Applications with Cypress")
  })
})
