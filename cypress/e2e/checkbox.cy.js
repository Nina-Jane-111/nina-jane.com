/// <reference types="cypress" />

import { onNavBar } from "../support/page_objects/navigation.js"
import { onCheckboxTest } from "../support/page_objects/checkboxTest.js"

const index = 2

describe('tests checkbox feature on test task page', () => {
  
  beforeEach('open application', () => {
    cy.openHomePage()
    onNavBar.navigateToTestTaskPage()
})

  it('should display textbox feature', () => {
    onCheckboxTest.viewCheckBoxHeading()
    onCheckboxTest.viewCheckboxLabels()
    onCheckboxTest.viewRedSubmitButton()
  })

  it('should check and uncheck checkboxes', () => {
    onCheckboxTest.viewCheckAndUncheck()
  })

  it('should click one checkbox and submit', () => {
    onCheckboxTest.submitOneCheckboxSelection(index)
  })

})
