export default new class CartPage{
    elements = {
        procedToCheckoutButton: () => cy.get('a[class="btn btn-default check_out"]'),
        registerLoginLink:() => cy.get('a[href="/login"]').contains('Register / Login'),
    }

    clickProcedToCheckoutButton() {
        this.elements.procedToCheckoutButton().click()
    }
    clickRegisterLoginLink() {
        this.elements.registerLoginLink().click()
    }
}