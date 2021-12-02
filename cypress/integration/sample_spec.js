describe('Saibrotech page', () => {
    it('clicks link "cultura"', () => {
      cy.visit('https://www.saibro.tech')
      
      cy.pause()
      
      cy.contains('cultura').click()

    })
})