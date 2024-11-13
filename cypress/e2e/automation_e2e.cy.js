import Home from '../pageObjects/home'
import ProductsPage from '../pageObjects/productsPage'
import CartPage from '../pageObjects/cartPage'
import LoginPage from '../pageObjects/loginPage'

const { faker } = require('@faker-js/faker');


beforeEach(() => {
    cy.visit('https://automationexercise.com/')
})

describe('Web Automation Test', () => {

    it('tests user flow', () => {
        Home.clickProducts()
        ProductsPage.viewThirthProductDetails()
        const randNum = Math.floor(Math.random() * 20) + 1
        ProductsPage.enterQuantityValue(randNum)
        ProductsPage.clickAddToCartButton()
        ProductsPage.clickContinueShoppingPopUpButton()
        Home.clickCart()
        CartPage.clickProcedToCheckoutButton()
        CartPage.clickRegisterLoginLink()
        const fullName = faker.person.fullName();
        const email = faker.internet.email();
        const password = faker.internet.password();
        LoginPage.typeSignupNameField(fullName)
        LoginPage.typeSignupEmailField(email)
        LoginPage.clickSignupButton()
        LoginPage.typeSignupPasswordField(password)
        LoginPage.typeSignupFirstNameField('test')
        LoginPage.typeSignupLastNameField('test')
        LoginPage.typeSignupAddressField('test')
        LoginPage.typeSignupStateField('test')
        LoginPage.typeSignupCityField('test')
        LoginPage.typeSignupZipcodeField('99999')
        LoginPage.typeSignupMobileField('88888888')
        LoginPage.clickCreateAcountButton()
        LoginPage.clickContinueButton()
        Home.clickCart()
        CartPage.clickProcedToCheckoutButton()
        Home.clickLogoutTitle()
    })

})