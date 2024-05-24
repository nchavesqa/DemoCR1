///<reference types="Cypress"/>
require('cypress-plugin-tab')

describe("Pruebas en Asistencia Funeraria", ()=> {

    /* ==== Test Created with Cypress Studio ==== */
    it('Prueba Asistencia', function() {
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

    it('Prueba Asistencia - Test Individuales', function(){

        /* ==== Generated with Cypress Studio ==== */
        cy.visit('http://localhost:8090/asistencia-funeraria-1/');
        cy.visit('http://localhost:8090/asistencia-funeraria-1/');
        /* ==== End Cypress Studio ==== */
        /* ==== Generated with Cypress Studio ==== */
        cy.get('#\\34 c780c00-2ef8-44b0-ad7f-443a78366a74').clear('Dyann $%%$');
        cy.get('#\\34 c780c00-2ef8-44b0-ad7f-443a78366a74').type('Dyann $%%$');
        cy.get('#\\30 6ffd18a-a5b4-4f73-9215-e88d8b301822').click();
        cy.get('#\\34 c780c00-2ef8-44b0-ad7f-443a78366a74').clear();
        cy.get('#\\34 c780c00-2ef8-44b0-ad7f-443a78366a74').type('Dyann 12555');
        cy.get('#c865c3ea-87bc-48d6-a9af-69607fc3461d > :nth-child(1)').click();
        cy.get('#\\34 c780c00-2ef8-44b0-ad7f-443a78366a74-error').should('be.visible');
        /* ==== End Cypress Studio ==== */
        /* ==== Generated with Cypress Studio ==== */
        cy.get('#\\34 c780c00-2ef8-44b0-ad7f-443a78366a74').clear('Dyann !##$1255');
        cy.get('#\\34 c780c00-2ef8-44b0-ad7f-443a78366a74').type('Dyann');
        cy.get('#c865c3ea-87bc-48d6-a9af-69607fc3461d > :nth-child(1)').click();
        cy.get('#\\31 8e0932b-5c37-418c-aec4-41c85299e59c').clear('Fernandez $%%$');
        cy.get('#\\31 8e0932b-5c37-418c-aec4-41c85299e59c').type('Fernandez $%%$');
        cy.get('#\\30 6ffd18a-a5b4-4f73-9215-e88d8b301822').click();
        cy.get('#\\31 8e0932b-5c37-418c-aec4-41c85299e59c').clear();
        cy.get('#\\31 8e0932b-5c37-418c-aec4-41c85299e59c').type('Fernandez');
        /* ==== End Cypress Studio ==== */
        /* ==== Generated with Cypress Studio ==== */
        cy.get('#\\31 8e0932b-5c37-418c-aec4-41c85299e59c').clear();
        cy.get('#\\31 8e0932b-5c37-418c-aec4-41c85299e59c').type('Fernandez 1225');
        cy.get('#\\31 8e0932b-5c37-418c-aec4-41c85299e59c-error').should('be.visible');
        /* ==== End Cypress Studio ==== */
        /* ==== Generated with Cypress Studio ==== */
        cy.get('#\\31 8e0932b-5c37-418c-aec4-41c85299e59c').clear();
        cy.get('#\\31 8e0932b-5c37-418c-aec4-41c85299e59c').type('Fernandez');
        /* ==== End Cypress Studio ==== */
        /* ==== Generated with Cypress Studio ==== */
        cy.get(':nth-child(3) > .umbraco-forms-field > .umbraco-forms-field-wrapper > .Select-Customizado > .select-selected').click();
        cy.get(':nth-child(3) > .umbraco-forms-field > .umbraco-forms-field-wrapper > .Select-Customizado > .select-items > .contenedorSelectItems > .simplebar-wrapper > .simplebar-mask > .simplebar-offset > .simplebar-content-wrapper > .simplebar-content > :nth-child(2)').click();
        cy.get('#a4f0e8b5-7285-4705-ddbc-057bf5fd6d74').clear('1');
        cy.get('#a4f0e8b5-7285-4705-ddbc-057bf5fd6d74').type('1-252');
        cy.get('#c865c3ea-87bc-48d6-a9af-69607fc3461d > :nth-child(1)').click();
        cy.get('#a4f0e8b5-7285-4705-ddbc-057bf5fd6d74-error').should('be.visible');
        cy.get('#a4f0e8b5-7285-4705-ddbc-057bf5fd6d74').clear('1-252456');
        cy.get('#a4f0e8b5-7285-4705-ddbc-057bf5fd6d74').type('1-2524-5645');
        cy.get('#c865c3ea-87bc-48d6-a9af-69607fc3461d > :nth-child(1)').click();
        /* ==== End Cypress Studio ==== */
        /* ==== Generated with Cypress Studio ==== */
        cy.get('#b1797df9-8304-45c4-9b37-5979efba3d96').clear('dfernandezatomsoluciones.com');
        cy.get('#b1797df9-8304-45c4-9b37-5979efba3d96').type('dfernandezatomsoluciones.com');
        cy.get('#c865c3ea-87bc-48d6-a9af-69607fc3461d > :nth-child(1)').click();
        cy.get('#b1797df9-8304-45c4-9b37-5979efba3d96').clear('dfernandez"atomsoluciones.com');
        cy.get('#b1797df9-8304-45c4-9b37-5979efba3d96').type('dfernandez@atomsoluciones.com');
        cy.get('#b1797df9-8304-45c4-9b37-5979efba3d96').clear('dfernandez@atomsolucionescom');
        cy.get('#b1797df9-8304-45c4-9b37-5979efba3d96').type('dfernandez@atomsolucionescom');
        cy.get('#c865c3ea-87bc-48d6-a9af-69607fc3461d > :nth-child(1)').click();
        cy.get('.field-validation-error').should('be.visible');
        cy.get('#b1797df9-8304-45c4-9b37-5979efba3d96').click();
        cy.get('#b1797df9-8304-45c4-9b37-5979efba3d96').clear('dfernandez@atomsoluciones.com');
        cy.get('#b1797df9-8304-45c4-9b37-5979efba3d96').type('dfernandez@atomsoluciones.com');
        /* ==== End Cypress Studio ==== */
        /* ==== Generated with Cypress Studio ==== */
        cy.get('#\\33 18c18c8-97e2-4ee5-816d-7efa7b762ffa').clear('1');
        cy.get('#\\33 18c18c8-97e2-4ee5-816d-7efa7b762ffa').type('15553');
        cy.get('#c865c3ea-87bc-48d6-a9af-69607fc3461d > :nth-child(1)').click({force:true});
        cy.get('.field-validation-error').should('be.visible');
        cy.get('#\\33 18c18c8-97e2-4ee5-816d-7efa7b762ffa').clear('1555-32');
        cy.get('#\\33 18c18c8-97e2-4ee5-816d-7efa7b762ffa').type('1555-3225');
        /* ==== End Cypress Studio ==== */
        /* ==== Generated with Cypress Studio ==== */
        cy.get(':nth-child(7) > .umbraco-forms-field > .umbraco-forms-field-wrapper > .Select-Customizado > .select-selected').click();
        cy.get('.simplebar-content > [onclick="cambiarProvincia(6);"]').click();
        cy.get(':nth-child(8) > .umbraco-forms-field > .umbraco-forms-field-wrapper > .Select-Customizado > .select-selected').click();
        cy.get('.contenedorSelectItems > [onclick="cambiarCanton(67);"]').click();
        cy.get(':nth-child(9) > .umbraco-forms-field > .umbraco-forms-field-wrapper > .Select-Customizado > .select-selected').click();
        cy.get('.contenedorSelectItems > :nth-child(414)').click();
        cy.get('#date_25371b7d_4e96_4210_9f52_483ff5b365cd').click();
        cy.get('.flatpickr-prev-month > img').click();
        cy.get('.flatpickr-prev-month > img').click();
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
        cy.get('[aria-label="Mar 20, 2012"]').click();
        cy.get('.SecondaryButton').click();
        cy.get('#date_25371b7d_4e96_4210_9f52_483ff5b365cd').click();
        cy.get('.SecondaryButton').click();
        cy.get(':nth-child(11) > .umbraco-forms-field > .umbraco-forms-field-wrapper > .Select-Customizado > .select-selected').click();
        cy.get(':nth-child(11) > .umbraco-forms-field > .umbraco-forms-field-wrapper > .Select-Customizado > .select-items > .contenedorSelectItems > :nth-child(4)').click();
        cy.get('#aa4186f6-21ae-4a7d-9620-b6672db3d98c').click();
        cy.get('#c865c3ea-87bc-48d6-a9af-69607fc3461d > :nth-child(1)').click();
        cy.get('#aa4186f6-21ae-4a7d-9620-b6672db3d98c').clear('Patitos');
        cy.get('#aa4186f6-21ae-4a7d-9620-b6672db3d98c').type('Patitos $%$$#');
        cy.get('#c865c3ea-87bc-48d6-a9af-69607fc3461d > :nth-child(1)').click();
        cy.get('#aa4186f6-21ae-4a7d-9620-b6672db3d98c').clear();
        cy.get('#aa4186f6-21ae-4a7d-9620-b6672db3d98c').type('Patitos 55555');
        cy.get('#c865c3ea-87bc-48d6-a9af-69607fc3461d > :nth-child(1)').click();
        cy.get('#aa4186f6-21ae-4a7d-9620-b6672db3d98c').clear('Patitos 5555');
        cy.get('#aa4186f6-21ae-4a7d-9620-b6672db3d98c').type('Patitos 5');
        cy.get('#c865c3ea-87bc-48d6-a9af-69607fc3461d > :nth-child(1)').click();
        cy.get('.field-validation-error').should('be.visible');
        cy.get('#aa4186f6-21ae-4a7d-9620-b6672db3d98c').clear('Patitos ');
        cy.get('#aa4186f6-21ae-4a7d-9620-b6672db3d98c').type('Patitos');
        /* ==== End Cypress Studio ==== */
        /* ==== Generated with Cypress Studio ==== */

        /* ==== Generated with Cypress Studio ==== */
        cy.get('#b06a4596-c41b-48e0-8efb-d2b1cc3f7b8d').clear('2');
        cy.get('#b06a4596-c41b-48e0-8efb-d2b1cc3f7b8d').type('23');
        cy.get('#c865c3ea-87bc-48d6-a9af-69607fc3461d > :nth-child(1)').click();
        cy.get('#b06a4596-c41b-48e0-8efb-d2b1cc3f7b8d').clear('2356');
        cy.get('#b06a4596-c41b-48e0-8efb-d2b1cc3f7b8d').type('235656');
        cy.get('#b06a4596-c41b-48e0-8efb-d2b1cc3f7b8d-error').should('be.visible');
        cy.get('#b06a4596-c41b-48e0-8efb-d2b1cc3f7b8d').clear('23565');
        cy.get('#b06a4596-c41b-48e0-8efb-d2b1cc3f7b8d').type('2356');
        cy.get('.btn').click();
        cy.get('#\\33 a185598-5021-4015-8b95-efedcfc334e5').clear('Karla Fuentes $$%#');
        cy.get('#\\33 a185598-5021-4015-8b95-efedcfc334e5').type('Karla Fuentes $$%#');
        cy.get('#\\31 7b177a8-21b1-4c96-db82-160c1d5fdc94 > :nth-child(1)').click();
        cy.get('#\\33 a185598-5021-4015-8b95-efedcfc334e5').clear();
        cy.get('#\\33 a185598-5021-4015-8b95-efedcfc334e5').type('Karla Fuentes 1252');
        cy.get('#\\33 a185598-5021-4015-8b95-efedcfc334e5-error').should('be.visible');
        cy.get('#\\33 a185598-5021-4015-8b95-efedcfc334e5').clear('Karla Fuentes 125');
        cy.get('#\\33 a185598-5021-4015-8b95-efedcfc334e5').type('Karla Fuentes');
        cy.get('#\\31 7b177a8-21b1-4c96-db82-160c1d5fdc94 > :nth-child(1)').click();
        /* ==== End Cypress Studio ==== */
    })

})//fin describe
 