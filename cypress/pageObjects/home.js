export default new class Home{
    elements = {
        productsTitle: () => cy.get('a[href="/products"]'),
        cartTitle: () => cy.get('a[href="/view_cart"]').contains(' Cart'),
        logoutTitle: () => cy.get('a[href="/logout"]')
    }

    clickProducts() {
        this.elements.productsTitle().click()
    }
    clickCart() {
        this.elements.cartTitle().click( {force: true} )
    }
    clickLogoutTitle() {
        this.elements.logoutTitle().click()
    }
}