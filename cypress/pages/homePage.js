module.exports = ({

    userName() { return cy.get('#user-name') },
    password() { return cy.get('#password') },
    loginButton() { return cy.get('#login-button') },

    addToCart() { return cy.get(".btn_inventory") },

    shoppingCart() { return cy.get(".shopping_cart_link") },

    inventoryItemName() { return cy.get(".inventory_item_name") },

    inventoryItemPrice() { return cy.get(".inventory_item_price") },

    checkout() { return cy.get("#checkout") },

    firstName() { return cy.get("#first-name") },
    lastName() { return cy.get("#last-name") },
    postalCode() { return cy.get("#postal-code") },
    continue() { return cy.get("#continue") },
    finish() { return cy.get("#finish") },
    backHome() { return cy.get("#back-to-products") },
});