///<reference types="Cypress"/>
require('cypress-plugin-tab')

describe("Pruebas en Asistencia Funeraria", ()=> {
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from failing the test
        return false
      })
    /* ==== Test Created with Cypress Studio ==== */
    it('Prueba Positiva', function() {
        /* ==== Generated with Cypress Studio ==== */
        cy.visit('http://localhost:8090/asistencia-funeraria-1/');
        cy.get('#\\34 c780c00-2ef8-44b0-ad7f-443a78366a74').type('Dyann');
        cy.get('#\\31 8e0932b-5c37-418c-aec4-41c85299e59c').clear('Fernandez');
        cy.get('#\\31 8e0932b-5c37-418c-aec4-41c85299e59c').type('Fernandez');
        cy.get(':nth-child(3) > .umbraco-forms-field > .umbraco-forms-field-wrapper > .Select-Customizado > .select-selected').click();
        cy.get(':nth-child(3) > .umbraco-forms-field > .umbraco-forms-field-wrapper > .Select-Customizado > .select-items > .contenedorSelectItems > .simplebar-wrapper > .simplebar-mask > .simplebar-offset > .simplebar-content-wrapper > .simplebar-content > :nth-child(6)').click();
        cy.get('#a4f0e8b5-7285-4705-ddbc-057bf5fd6d74').clear('15');
        cy.get('#a4f0e8b5-7285-4705-ddbc-057bf5fd6d74').type('1564544894848948948484');
        cy.get('#b1797df9-8304-45c4-9b37-5979efba3d96').clear('d');
        cy.get('#b1797df9-8304-45c4-9b37-5979efba3d96').type('dfernandez@atomsoluciones.com');
        cy.get('#\\33 18c18c8-97e2-4ee5-816d-7efa7b762ffa').clear('45');
        cy.get('#\\33 18c18c8-97e2-4ee5-816d-7efa7b762ffa').type('4564-5456');
        cy.get(':nth-child(7) > .umbraco-forms-field > .umbraco-forms-field-wrapper > .Select-Customizado > .select-selected').click();
        cy.get('.simplebar-content > [onclick="cambiarProvincia(1);"]').click();
        cy.get(':nth-child(8) > .umbraco-forms-field > .umbraco-forms-field-wrapper > .Select-Customizado > .select-selected').click();
        cy.get('.contenedorSelectItems > [onclick="cambiarCanton(3);"]').click();
        cy.get(':nth-child(9) > .umbraco-forms-field > .umbraco-forms-field-wrapper > .Select-Customizado > .select-selected').click();
        cy.get(':nth-child(9) > .umbraco-forms-field > .umbraco-forms-field-wrapper > .Select-Customizado > .select-items > .contenedorSelectItems > :nth-child(16)').click();
        cy.get('.custom-datepicker').click();
        cy.get('.custom-datepicker').click();
        cy.get('#date_25371b7d_4e96_4210_9f52_483ff5b365cd').click();
        cy.get('.flatpickr-prev-year > img').click();
        cy.get('.flatpickr-prev-year > img').click();
        cy.get('.flatpickr-prev-year > img').click();
        cy.get('.flatpickr-prev-year > img').click();
        cy.get('.flatpickr-prev-year > img').click();
        cy.get('.flatpickr-prev-year > img').click();
        cy.get('.flatpickr-prev-year > img').click();
        cy.get('.flatpickr-prev-year > img').click();
        cy.get('.flatpickr-prev-year > img').click();
        cy.get('.flatpickr-prev-year > img').click();
        cy.get('.flatpickr-prev-year > img').click();
        cy.get('.flatpickr-prev-year > img').click();
        cy.get('.flatpickr-prev-year > img').click();
        cy.get('.flatpickr-prev-year > img').click();
        cy.get('.flatpickr-prev-year > img').click();
        cy.get('.flatpickr-prev-year > img').click();
        cy.get('.flatpickr-prev-year > img').click();
        cy.get('.flatpickr-prev-year > img').click();
        cy.get('.flatpickr-prev-year > img').click();
        cy.get('.flatpickr-prev-year > img').click();
        cy.get('.flatpickr-prev-year > img').click();
        cy.get('.flatpickr-prev-year > img').click();
        cy.get('.flatpickr-prev-year > img').click();
        cy.get('.flatpickr-prev-year > img').click();
        cy.get('.flatpickr-prev-year > img').click();
        cy.get('[aria-label="May 12, 1999"]').click();
        cy.get('#c865c3ea-87bc-48d6-a9af-69607fc3461d > :nth-child(1)').click();
        cy.get(':nth-child(11) > .umbraco-forms-field > .umbraco-forms-field-wrapper > .Select-Customizado > .select-selected').click();
        cy.get(':nth-child(11) > .umbraco-forms-field > .umbraco-forms-field-wrapper > .Select-Customizado > .select-items > .contenedorSelectItems > :nth-child(3)').click();
        cy.get('#aa4186f6-21ae-4a7d-9620-b6672db3d98c').clear('P');
        cy.get('#aa4186f6-21ae-4a7d-9620-b6672db3d98c').type('Patitos');
        cy.get('#b06a4596-c41b-48e0-8efb-d2b1cc3f7b8d').clear('2');
        cy.get('#b06a4596-c41b-48e0-8efb-d2b1cc3f7b8d').type('2563');
        /* ==== End Cypress Studio ==== */
        /* ==== Generated with Cypress Studio ==== */
        
        cy.get('.btn').click();
        cy.get('#\\33 a185598-5021-4015-8b95-efedcfc334e5').type('Karla Fuentes');
        cy.get('.select-selected').click();
        cy.get('.simplebar-content > :nth-child(2)').click();
        cy.get('#f156bb90-c7b6-4b07-ae7a-f481e0ab5934').type('4-5646-4489');
        cy.get('#date_47ebc632_696e_450f_b05c_cb0b97449d24').click();
        cy.get('.flatpickr-prev-year > img').click();
        cy.get('.flatpickr-prev-year > img').click();
        cy.get('.flatpickr-prev-year > img').click();
        cy.get('.flatpickr-prev-year > img').click();
        cy.get('.flatpickr-prev-year > img').click();
        cy.get('.flatpickr-prev-year > img').click();
        cy.get('.flatpickr-prev-year > img').click();
        cy.get('.flatpickr-prev-year > img').click();
        cy.get('.flatpickr-prev-year > img').click();
        cy.get('.flatpickr-prev-year > img').click();
        cy.get('.flatpickr-prev-year > img').click();
        cy.get('.flatpickr-prev-year > img').click();
        cy.get('.flatpickr-prev-year > img').click();
        cy.get('.flatpickr-prev-year > img').click();
        cy.get('.flatpickr-prev-year > img').click();
        cy.get('.flatpickr-prev-year > img').click();
        cy.get('.flatpickr-prev-year > img').click();
        cy.get('.flatpickr-prev-year > img').click();
        cy.get('.flatpickr-prev-year > img').click();
        cy.get('.flatpickr-prev-year > img').click();
        cy.get('.flatpickr-prev-year > img').click();
        cy.get('.flatpickr-prev-year > img').click();
        cy.get('.flatpickr-prev-year > img').click();
        cy.get('.flatpickr-prev-year > img').click();
        cy.get('.flatpickr-prev-year > img').click();
        cy.get('.flatpickr-prev-year > img').click();
        cy.get('.flatpickr-prev-year > img').click();
        cy.get('.flatpickr-prev-year > img').click();
        cy.get('[aria-label="May 14, 1996"]').click();
        cy.get('#\\31 7b177a8-21b1-4c96-db82-160c1d5fdc94 > :nth-child(1)').click();
        cy.get('#c1542b7f-5476-46e3-a7f3-b7a53e5d1540').check();
        cy.get('#ef6df7d3-c978-4af6-b758-42887376e6ed').check();
        /* ==== End Cypress Studio ==== */
        /* ==== Generated with Cypress Studio ==== */
        cy.get(':nth-child(2) > .btn').click();
        /* ==== End Cypress Studio ==== */
    });

    /* ==== Test Created with Cypress Studio ==== */
    it('Prueba 2', function() {
        /* ==== Generated with Cypress Studio ==== */
        cy.visit('http://localhost:8090/asistencia-funeraria-1/');
        cy.get('.btn').click();
        /* ==== End Cypress Studio ==== */
        /* ==== Generated with Cypress Studio ==== */
        cy.get('#\\34 c780c00-2ef8-44b0-ad7f-443a78366a74').clear('Dyann $%%$');
        cy.get('#\\34 c780c00-2ef8-44b0-ad7f-443a78366a74').type('Dyann $%%$');
        cy.get('#\\31 8e0932b-5c37-418c-aec4-41c85299e59c').clear('Fernandez $%%$');
        cy.get('#\\31 8e0932b-5c37-418c-aec4-41c85299e59c').type('Fernandez $%%$');
        cy.get(':nth-child(3) > .umbraco-forms-field > .umbraco-forms-field-wrapper > .Select-Customizado > .select-selected').click();
        cy.get(':nth-child(3) > .umbraco-forms-field > .umbraco-forms-field-wrapper > .Select-Customizado > .select-items > .contenedorSelectItems > .simplebar-wrapper > .simplebar-mask > .simplebar-offset > .simplebar-content-wrapper > .simplebar-content > :nth-child(2)').click();
        cy.get('#a4f0e8b5-7285-4705-ddbc-057bf5fd6d74').clear('2');
        cy.get('#a4f0e8b5-7285-4705-ddbc-057bf5fd6d74').type('2-555');
        cy.get('#c865c3ea-87bc-48d6-a9af-69607fc3461d > :nth-child(1)').click();
        cy.get('#b1797df9-8304-45c4-9b37-5979efba3d96').clear('dfernandezatomsoluciones.com');
        cy.get('#b1797df9-8304-45c4-9b37-5979efba3d96').type('dfernandezatomsoluciones.com');
        cy.get('#\\33 18c18c8-97e2-4ee5-816d-7efa7b762ffa').clear('2');
        cy.get('#\\33 18c18c8-97e2-4ee5-816d-7efa7b762ffa').type('2545');
        cy.get('#c865c3ea-87bc-48d6-a9af-69607fc3461d > :nth-child(1)').click();
        cy.get(':nth-child(7) > .umbraco-forms-field > .umbraco-forms-field-wrapper > .Select-Customizado > .select-selected').click();
        cy.get('.simplebar-content > [onclick="cambiarProvincia(3);"]').click();
        cy.get(':nth-child(8) > .umbraco-forms-field > .umbraco-forms-field-wrapper > .Select-Customizado > .select-selected').click();
        cy.get('.contenedorSelectItems > [onclick="cambiarCanton(38);"]').click();
        cy.get(':nth-child(9) > .umbraco-forms-field > .umbraco-forms-field-wrapper > .Select-Customizado > .select-selected').click();
        cy.get('.contenedorSelectItems > :nth-child(253)').click();
        cy.get('#date_25371b7d_4e96_4210_9f52_483ff5b365cd').click();
        cy.get('.flatpickr-prev-year > img').click();
        cy.get('.flatpickr-prev-year > img').click();
        cy.get('.flatpickr-prev-year > img').click();
        cy.get('.flatpickr-prev-year > img').click();
        cy.get('.flatpickr-prev-year > img').click();
        cy.get('.flatpickr-prev-year > img').click();
        cy.get('.flatpickr-prev-year > img').click();
        cy.get('.flatpickr-prev-year > img').click();
        cy.get('.flatpickr-prev-year > img').click();
        cy.get('.flatpickr-prev-year > img').click();
        cy.get('.flatpickr-prev-year > img').click();
        cy.get('.flatpickr-prev-year > img').click();
        cy.get('.flatpickr-prev-year > img').click();
        cy.get('.flatpickr-prev-year > img').click();
        cy.get('.flatpickr-prev-year > img').click();
        cy.get('.flatpickr-prev-year > img').click();
        cy.get('.flatpickr-prev-year > img').click();
        cy.get('.flatpickr-prev-year > img').click();
        cy.get('.flatpickr-prev-year > img').click();
        cy.get('.flatpickr-prev-year > img').click();
        cy.get('.flatpickr-prev-year > img').click();
        cy.get('.flatpickr-prev-year > img').click();
        cy.get('.flatpickr-prev-year > img').click();
        cy.get('.flatpickr-prev-year > img').click();
        cy.get('.flatpickr-prev-year > img').click();
        cy.get('.flatpickr-prev-year > img').click();
        cy.get('.flatpickr-prev-year > img').click();
        cy.get('.flatpickr-prev-year > img').click();
        cy.get('.flatpickr-prev-year > img').click();
        cy.get('[aria-label="May 16, 1995"]').click();
        cy.get(':nth-child(11) > .umbraco-forms-field > .umbraco-forms-field-wrapper > .Select-Customizado > .select-selected').click({force:true});
        cy.get(':nth-child(11) > .umbraco-forms-field > .umbraco-forms-field-wrapper > .Select-Customizado > .select-items > .contenedorSelectItems > :nth-child(3)').click();
        cy.get('#aa4186f6-21ae-4a7d-9620-b6672db3d98c').clear('Patitos');
        cy.get('#aa4186f6-21ae-4a7d-9620-b6672db3d98c').type('Patitos');
        cy.get('#b06a4596-c41b-48e0-8efb-d2b1cc3f7b8d').clear('256');
        cy.get('#b06a4596-c41b-48e0-8efb-d2b1cc3f7b8d').type('256');
        cy.get('.btn').click();
        /* ==== End Cypress Studio ==== */
        /* ==== Generated with Cypress Studio ==== */
        cy.get('#\\34 c780c00-2ef8-44b0-ad7f-443a78366a74').clear('Dyann $%%');
        cy.get('#\\34 c780c00-2ef8-44b0-ad7f-443a78366a74').type('Dyann');
        cy.get('#\\31 8e0932b-5c37-418c-aec4-41c85299e59c').click();
        cy.get('#\\31 8e0932b-5c37-418c-aec4-41c85299e59c').clear('Fernandez $%%');
        cy.get('#\\31 8e0932b-5c37-418c-aec4-41c85299e59c').type('Fernandez');
        cy.get('#a4f0e8b5-7285-4705-ddbc-057bf5fd6d74').clear('2-55554');
        cy.get('#a4f0e8b5-7285-4705-ddbc-057bf5fd6d74').type('2-5555-4488');
        cy.get('#b1797df9-8304-45c4-9b37-5979efba3d96').clear('dfernandez@atomsoluciones.com');
        cy.get('#b1797df9-8304-45c4-9b37-5979efba3d96').type('dfernandez@atomsoluciones.com');
        cy.get('#\\33 18c18c8-97e2-4ee5-816d-7efa7b762ffa').clear('254554');
        cy.get('#\\33 18c18c8-97e2-4ee5-816d-7efa7b762ffa').type('2545-5454');
        cy.get('#b06a4596-c41b-48e0-8efb-d2b1cc3f7b8d').clear('2562');
        cy.get('#b06a4596-c41b-48e0-8efb-d2b1cc3f7b8d').type('2562');
        cy.get('.btn').click();
        cy.get(':nth-child(2) > .btn').click();
        cy.get('#\\33 a185598-5021-4015-8b95-efedcfc334e5').clear('Karla Fuentes');
        cy.get('#\\33 a185598-5021-4015-8b95-efedcfc334e5').type('Karla Fuentes $$%#');
        cy.get('.umbraco-forms-container').click();
        cy.get('.select-selected').click();
        cy.get('.simplebar-content > :nth-child(2)').click();
        cy.get('#f156bb90-c7b6-4b07-ae7a-f481e0ab5934').clear('1');
        cy.get('#f156bb90-c7b6-4b07-ae7a-f481e0ab5934').type('1-2525');
        cy.get('#date_47ebc632_696e_450f_b05c_cb0b97449d24').click();
        cy.get('.flatpickr-prev-year > img').click({force:true});
        cy.get('.flatpickr-prev-year > img').click({force:true});
        cy.get('.flatpickr-prev-year > img').click({force:true});
        cy.get('.flatpickr-prev-year > img').click({force:true});
        cy.get('.flatpickr-prev-year > img').click({force:true});
        cy.get('.flatpickr-prev-year > img').click({force:true});
        cy.get('.flatpickr-prev-year > img').click({force:true});
        cy.get('.flatpickr-prev-year > img').click({force:true});
        cy.get('.flatpickr-prev-year > img').click({force:true});
        cy.get('.flatpickr-prev-year > img').click({force:true});
        cy.get('.flatpickr-prev-year > img').click({force:true});
        cy.get('.flatpickr-prev-year > img').click({force:true});
        cy.get('.flatpickr-prev-year > img').click({force:true});
        cy.get('.flatpickr-prev-year > img').click({force:true});
        cy.get('.flatpickr-prev-year > img').click({force:true});
        cy.get('.flatpickr-prev-year > img').click({force:true});
        cy.get('.flatpickr-prev-year > img').click({force:true});
        cy.get('.flatpickr-prev-year > img').click({force:true});
        cy.get('.flatpickr-prev-year > img').click({force:true});
        cy.get('.flatpickr-prev-year > img').click({force:true});
        cy.get('.flatpickr-prev-year > img').click({force:true});
        cy.get('.flatpickr-prev-year > img').click({force:true});
        cy.get('.flatpickr-prev-year > img').click({force:true});
        cy.get('.flatpickr-prev-year > img').click({force:true});
        cy.get('.flatpickr-prev-year > img').click({force:true});
        cy.get('.flatpickr-prev-year > img').click({force:true});
        cy.get('.flatpickr-prev-year > img').click({force:true});
        cy.get('.flatpickr-prev-year > img').click({force:true});
        cy.get('.flatpickr-prev-year > img').click({force:true});
        cy.get('[aria-label="May 16, 1995"]').click({force:true});
        cy.get('#\\31 7b177a8-21b1-4c96-db82-160c1d5fdc94 > :nth-child(1)').click();
        cy.get('#c1542b7f-5476-46e3-a7f3-b7a53e5d1540').check();
        cy.get('#ef6df7d3-c978-4af6-b758-42887376e6ed').check();
        cy.get(':nth-child(2) > .btn').click();
        cy.get('#\\33 a185598-5021-4015-8b95-efedcfc334e5').clear('Karla Fuentes $$%');
        cy.get('#\\33 a185598-5021-4015-8b95-efedcfc334e5').type('Karla Fuentes');
        cy.get('#f156bb90-c7b6-4b07-ae7a-f481e0ab5934').clear('1-252554');
        cy.get('#f156bb90-c7b6-4b07-ae7a-f481e0ab5934').type('1-2525-5454');
        cy.get(':nth-child(2) > .btn').click();
        /* ==== End Cypress Studio ==== */
    });
})//fin describe