describe('SauceDemo Test', {testIsolation :false },() => {
  it("validar página de inicio", () => {
    cy.visit("https://saucedemo.com/");
    it("Verificar título del sitio Saucedemo")
    cy.title().should('eq','Swag Labs')
  });
      it("login con standard_user", () => {
        cy.get("#user-name").type("standard_user")
        cy.get("#password").type("secret_sauce")
        cy.get("#login-button").click()
      });

      it("Agregar producto al carrito de compras", () => {
        cy.get('[data-test="item-4-title-link"] > [data-test="inventory-item-name"]')
        cy.get('[data-test="item-4-title-link"] > [data-test="inventory-item-name"]').click()
        cy.get('[data-test="add-to-cart"]').click()
        cy.get("[data-test='shopping-cart-badge']").should('have.text','1')
        cy.get("[data-test='shopping-cart-badge']").click()
      });
      
      it("Realizar el checkout", () => {     
      cy.get("#checkout").click()
      cy.get("#first-name").type('Ivana')
      cy.get("#last-name").type('Pivatto')
      cy.get("#postal-code").type('5000')
      cy.get("#continue").click()
      cy.get("[data-test='inventory-item-name']").eq(0).contains('Sauce Labs Backpack')
      cy.get("#finish").click()
      cy.get("h2").contains('Thank you for your order!')
      cy.get('#react-burger-menu-btn').click()
      cy.get("[data-test='logout-sidebar-link']").click()
      
    });

    it("login con el problem_user", () => {
      cy.visit("https://saucedemo.com/");
      cy.get("#user-name").type("problem_user")
      cy.get("#password").type("secret_sauce")
      cy.get("#login-button").click()
    });

    it("Agregar producto al carrito de compras", () => {
      cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
      cy.get("[data-test='shopping-cart-badge']").should('have.text','1')
      cy.get("[data-test='shopping-cart-badge']").click()
      
    });
    
    it("Realizar el checkout", () => {     
    cy.get("#checkout").click()
    cy.get("#first-name").type('Ivana')
    cy.get("#last-name").type('Pivatto')
    cy.get("#postal-code").type('5000')
    cy.get("#continue").click()
    cy.get("[data-test='inventory-item-name']").eq(0).contains('Sauce Labs Bike Light')
    cy.get("#finish").click()
    cy.get("h2").contains('Thank you for your order!')
    cy.get('#react-burger-menu-btn').click()
    cy.get("[data-test='logout-sidebar-link']").click()
    
  });
      
});   
  