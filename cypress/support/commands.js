import pages from "../pages/homePage";

Cypress.Commands.add('any', { prevSubject: 'element' }, (subject, size = 1) => {
  cy.wrap(subject).then(elementList => {
    elementList = (elementList.jquery) ? elementList.get() : elementList;
    elementList = Cypress._.sampleSize(elementList, size);
    elementList = (elementList.length > 1) ? elementList : elementList[0];
    cy.wrap(elementList);
  });
});

Cypress.Commands.add('LoginAsAValidUser', () => {

  cy.visit("/");
  pages.userName.type('standard_user');
  pages.password.type('secret_sauce');
  pages.loginButton.click();

});