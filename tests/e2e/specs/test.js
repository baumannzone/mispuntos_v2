// https://docs.cypress.io/api/introduction/api.html

describe( 'My First Test', () => {
  it( 'Visits the app root url', () => {
    cy.visit( '/' )
    cy.contains( 'h1', 'hello i18n message!!' )
    cy.get( '#btn-login' ).click()
    cy.get( '[data-cy=submit]' ).click()
    cy.get( '.v-messages.error--text' ).should( 'have.length', 2 )
  } )
} )
