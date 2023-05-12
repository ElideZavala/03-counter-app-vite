/* eslint-disable no-undef */
import { getSaludo } from "../../base-pruebas/02-template-string";

describe('Prubas en el archivo 02-template-string.test.js', () => {
    
    test('getSaludo debe de retornar "Hola Elide"', ()=> {
        const nombre = 'Elide';
        const saludo = getSaludo(nombre);
        expect(saludo).toBe(`Hola ${nombre}`);
    } )
})