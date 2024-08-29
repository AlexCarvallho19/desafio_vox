describe('acessar pagina web', () => {
    beforeEach(() => {
      cy.visit('/')
    })

    it('Validar acesso', () => {
      cy.title().should('be.equal', 'Swag Labs')
    })

  })