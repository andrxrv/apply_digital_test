export default new class LoginPage{
    elements = {
        signupNameField: () => cy.get('input[data-qa="signup-name"]'),
        signupEmailField: () => cy.get('input[data-qa="signup-email"]'),
        signupButton: () => cy.get('button[data-qa="signup-button"]'),
        signupPasswordField: () => cy.get('#password'),
        signupFirstNameField: () => cy.get('#first_name'),
        signupLastNameField: () => cy.get('#last_name'),
        signupAddressField: () => cy.get('#address1'),
        signupStateField: () => cy.get('#state'),
        signupCityField: () => cy.get('#city'),
        signupZipcodeField: () => cy.get('#zipcode'),
        signupMobileField: () => cy.get('#mobile_number'),
        createAcountButton: () => cy.get('button[data-qa="create-account"]'),
        continueButton: () => cy.get('a[data-qa="continue-button"]'),
    }

    typeSignupNameField(fullName) {
        this.elements.signupNameField().type(fullName)
    }
    typeSignupEmailField(email) {
        this.elements.signupEmailField().type(email)
    }
    clickSignupButton() {
        this.elements.signupButton().click()
    }
    typeSignupPasswordField(password) {
        this.elements.signupPasswordField().type(password)
    }
    typeSignupFirstNameField(firstName) {
        this.elements.signupFirstNameField().type(firstName)
    }
    typeSignupLastNameField(lastName) {
        this.elements.signupLastNameField().type(lastName)
    }
    typeSignupAddressField(address) {
        this.elements.signupAddressField().type(address)
    }
    typeSignupStateField(state) {
        this.elements.signupStateField().type(state)
    }
    typeSignupCityField(city) {
        this.elements.signupCityField().type(city)
    }
    typeSignupZipcodeField(zipcode) {
        this.elements.signupZipcodeField().type(zipcode)
    }
    typeSignupMobileField(mobile) {
        this.elements.signupMobileField().type(mobile)
    }
    clickCreateAcountButton() {
        this.elements.createAcountButton().click()
    }
    clickContinueButton() {
        this.elements.continueButton().click()
    }
}