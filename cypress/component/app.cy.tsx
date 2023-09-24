// @ts-nocheck
import React from "react";
import App from "../../src/App";
import "../../src/index.css";

describe('app.cy.tsx', () => {
  it('CSS color markers', () => {
    cy.mount(<App/>);
    cy.get('.container').should('exist').within(()=>{
      cy.get('.marker').should('exist');
    });
    cy.get('h1').should('exist').and('have.text', 'CSS Color Markers');
  })
});