describe("Spring -Challenge", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000/pizza");
    })

    const orderBtn = () => cy.get("button[name=orderBtn]")
    const nameInput = () => cy.get("input[name=name]")
    const pepperoniInput = () => cy.get("input[name=pepperoni]")
    const specialInput = () => cy.get("input[name=special]")

    it("Mandatory sanity check!", () => {
        expect(1 + 2).to.equal(3);
        cy.url().should("include", "localhost");
})

it("Checking to see if inputs are showing", () => {
    nameInput().should("exist")
    specialInput().should("exist")
})

describe("Testing form functionality", () => {
    it("Adding name", () => {
        nameInput()
        .should("have.value", "")
        .type("nathan")
        .should("have.value", "nathan")
    })

    it("Checking checkboxes", () => {
        it("Adding toppings", () => {
            pepperoniInput()
            .click()
        })
    })

    it("Submitting the button", () => {
        nameInput()
        .should("have.value", "")
        .type("nathan")
        .should("have.value", "nathan")
        pepperoniInput()
        .click()
        orderBtn()
        .click()
    })
})

})