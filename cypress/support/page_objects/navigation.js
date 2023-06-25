
export class navigationBar{

    navigateToTestTaskPage(){
        cy.contains('Test Tasks').click()
        cy.get('h1').should('contain', 'Test Tasks')
    }
  
}

export const onNavBar = new navigationBar()