import {retornaArreglo} from "../../base-pruebas/07-deses-arr";

/* eslint-disable no-undef */
describe('Pruebas en el archivo 07-deses-arr.test.js', () => {

    test('debe retornar un string y un number', () => {
        const [ letter, numbers ] = retornaArreglo();

        expect( letter ).toBe( 'ABC' );
        expect( numbers ).toBe( 123 );

        expect( typeof letter).toBe( 'string' );
        expect( typeof numbers).toBe( 'number' );

        expect( letter ).toEqual( expect.any(String));
        expect( numbers ).toEqual( expect.any(Number));
    })
});