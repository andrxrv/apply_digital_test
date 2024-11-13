export default new class ProductsPage{
    elements = {
        thirthProduct: () => cy.get('a[href="/product_details/3"]').contains('View Product'),
        quantity: () => cy.get('#quantity'),
        addCart: () => cy.get('button[type="button"]').contains(' Add to cart '),
        continueShoppingPopUpButton: () => cy.get('button[class="btn btn-success close-modal btn-block"]').contains('Continue Shopping')
    }

    viewThirthProductDetails() {
        this.elements.thirthProduct().click()
    }
    enterQuantityValue(number) {
        this.elements.quantity().type("{backspace}" + number)
    }
    clickAddToCartButton() {
        this.elements.addCart().click()
    }
    clickContinueShoppingPopUpButton() {
        this.elements.continueShoppingPopUpButton().click()
    }
}