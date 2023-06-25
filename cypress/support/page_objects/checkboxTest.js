const labels = ["Summer", "Autumn", "Winter", "Spring"]

export class checkboxFeature{

    viewCheckBoxHeading(){
        cy.get('#contact-form-132').then( checkboxForm => {
            cy.wrap(checkboxForm).should('contain','My favourite season is')
          })
    }

    viewCheckboxLabels(){
        
        cy.get('[class="grunion-checkbox-multiple-label checkbox-multiple "]').then( checkboxes => { 
            cy.wrap(checkboxes).each( (string, index) => {
              cy.wrap(checkboxes).eq(index).should('contain', labels[index])
            })
          })
    }

    viewRedSubmitButton(){
        cy.get('#contact-form-132').find('button[type="submit"]').should('contain', 'Submit').then( submitButton => {
            cy.wrap(submitButton).should('have.css', 'color', 'rgb(207, 46, 46)' )
        })
    }

    viewCheckAndUncheck(){
        cy.get('[type="checkbox"]').then( checkboxes => {
            cy.wrap(checkboxes).each( (value, index) => {
                cy.wrap(checkboxes).eq(index).check()
                cy.wrap(checkboxes).eq(index).click()
            })
        })
    }

    submitOneCheckboxSelection(index){
        cy.get('[type="checkbox"]').eq(index).check()
        cy.get('#contact-form-132').find('button[type="submit"]').click()
        cy.get('#contact-form-132').then( submitMessage => {
            cy.wrap(submitMessage).should('contain', 'Your message has been sent').and('contain', labels[index])
        })   
    }      
}
  
export const onCheckboxTest = new checkboxFeature()