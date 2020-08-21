describe('Add text, selecting toppings, submit form', () => {
    it('can navigate to http://localhost:1234', () => {
      cy.visit('http://localhost:3000/')
      cy.url().should('include', 'localhost')
    })

    it('can navigate to order page', () => {
        cy.get('#navOrder').click()
    })

    it('add text to box', () => {
      cy.get('input[name="name"]')
        .type('Bart Simpson')
        .should('have.value', 'Bart Simpson')
        })

    it('can choose a pizza size', () => {
        cy.get('select')
          .select('large')
    })

    it('can select multiple toppings', () => {
        cy.get('[type="checkbox"]').check()
    })

    it('can submit order', () => {
        cy.get('button').click()
    })
    })