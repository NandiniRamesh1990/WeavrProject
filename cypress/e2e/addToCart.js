import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor",
import pages from "../pages/homePage";

let cartItem, cartPrice, checkoutItem, checkoutPrice;


Given("I have logged as a valid user", () => {
  cy.LoginAsAValidUser();
});

Given("I add a random item to my cart", () => {


cy.addToCart().any(1).each(randomElement => {
  cy.wrap(randomElement).click();

});
}); 

When("I view my cart", () => {
pages.shoppingCart().click();
});  

Then("I validate the item listed is correct", () => {
   
pages.inventoryItemName().then(($val1) => { 
    cartItem = $val1.text();
    cy.log(cartItem)
   });
  pages.inventoryItemPrice().then(($val3) => {
    cartPrice = $val3.text();
   })
pages.checkout().click();

 pages.firstName().type("Nandini");
  pages.lastName().type("Ramesh");
 pages.postalCode().type("HA51ER");
  pages.continue().click();

  pages.inventoryItemName().then(($val2) => { 
    checkoutItem = $val2.text();
    cy.log(checkoutItem)
   });
  
  pages.inventoryItemPrice().then(($val4) => {
   checkoutPrice = $val4.text();
   })
  expect(cartItem).to.eq(checkoutItem);
  expect(cartPrice).to.eq(checkoutPrice);
});  

Then("I am able to checkout successfully", () => { 
  pages.finish().click();
  cy.contains("h2", "Thank you for your order!");
  cy.contains("Your order has been dispatched, and will arrive just as fast as the pony can get there!");
  pages.backHome().click();
  cy.url().should("include", "https://www.saucedemo.com/inventory.html");
  
});