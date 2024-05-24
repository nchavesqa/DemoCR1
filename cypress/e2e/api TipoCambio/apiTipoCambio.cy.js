///<reference types='Cypress'/>

describe('Pruebas Api Tipo Cambio', ()=> {

    var time = 1500
    let data;

    it('Valida estado de solicitud Tipo de Cambio Compra Costa Rica', ()=>{ // TIPO CAMBIO COSTA RICA

        data = cy.request('http://localhost:8020/WeSTipoCambio.asmx/ObtieneTipoCambioCompra')
        data.its('status').should('equal','200')

    })

    it('Valida estado de solicitud Tipo de Cambio Compra Costa Rica - Metodo 2', ()=>{ // TIPO CAMBIO COSTA RICA

        data = cy.request('http://localhost:8020/WeSTipoCambio.asmx/ObtieneTipoCambioCompra').should((response)=>{
            expect(response.status).to.equal(200)
        })
    })



    it('Consulta Tipo de Cambio Compra Costa Rica', ()=>{ // TIPO CAMBIO COSTA RICA
        
        for (let index = 0; index <= 10; index++) {
        
            cy.request({
                method: 'POST',
                url: 'http://localhost:8020/WeSTipoCambio.asmx/ObtieneTipoCambioCompra',
                headers:{
                    accept: 'application/xml'
                }
            }).then(response =>{
                let datos = response.body
                expect(response.status).to.equal(200)

                const regex = /<string xmlns="http:\/\/tempuri.org\/">([\d.]+)<\/string>/;
                const match = datos.match(regex);        
                cy.log(match[1]);
            })
        }
    })

    it('Consulta Tipo de Cambio Venta Costa Rica', ()=>{ // TIPO CAMBIO COSTA RICA
        
        for (let index = 0; index <=10; index++) {
            
            cy.request({
                method: 'POST',
                url: 'http://localhost:8020/WeSTipoCambio.asmx/ObtieneTipoCambioVenta',
                headers:{
                    accept: 'application/xml'
                }
            }).then(response =>{
                let datos = response.body
                expect(response.status).to.equal(200)
    
                const regex = /<string xmlns="http:\/\/tempuri.org\/">([\d.]+)<\/string>/;
                const match = datos.match(regex);        
                cy.log(match[1]);
            })
            
        }
    })

    it('Consulta Mes Tipo Cambio Historico', ()=>{ // TIPO CAMBIO COSTA RICA - No funcional
        
        cy.request({
            method: 'POST',
            url: 'http://localhost:8020/WeSTipoCambio.asmx/ObtieneMesTipoCambioHistorico',
            headers:{
                accept: 'application/xml',
                mes: 'enero',
                anio: '2022'

            }
        }).then(response =>{
            let datos = response.body
            expect(response.status).to.equal(200)
            cy.log(datos)
        })
    })

    it('Valida estado de solicitud Tipo de Cambio Dominicana', ()=>{ // TIPO CAMBIO COSTA RICA

        data = cy.request('http://localhost:8072/api/obtenerTipoCambio').should((response)=>{
            expect(response.status).to.equal(200)
        })
    })
    
    it('Consulta Tipo de Cambio Dominicana', ()=>{ // TIPO CAMBIO DOMINICANA
        
        cy.request({
            method: 'GET',
            url: 'http://localhost:8072/api/obtenerTipoCambio',
            headers:{
                accept: 'application/jason'
            }
        }).then(response =>{

            let datos;
            expect(response.status).to.equal(200)
            datos = JSON.parse(JSON.stringify(response.body)) 
            
            expect(datos[0]).has.property('currency')
            expect(datos[0]).has.property('description','DOLARES US$')
            expect(datos[0]).has.property('buys')
            expect(datos[0]).has.property('sales')
            cy.log(datos)
        })
    })

    it('Consulta Tipo de Cambio Dominicana', ()=>{ // TIPO CAMBIO DOMINICANA
        
        cy.request({
            method: 'GET',
            url: 'http://localhost:8072/api/obtenerTipoCambio',
            headers:{
                accept: 'application/jason'
            }
        }).then(response =>{

            let datos;
            expect(response.status).to.equal(200)

            datos = response.body;
            for (let i = 0; i < datos.length; i++) {

                const objeto = datos[i]
                cy.log(`Objeto ${i + 1}:******************************`)

                for (const propiedad in objeto) {
                    if (Object.hasOwnProperty.call(objeto, propiedad)) {
                        cy.log(`${propiedad}: ${objeto[propiedad]}`)
                    }
                }
            }
        })
    })

})//fin describe