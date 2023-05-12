import { getUser, getUsuarioActivo } from "../../base-pruebas/05-funciones";

/* eslint-disable no-undef */
describe('Pruuebas en el archivo 05-funciones.test.js', () => {

    test('debe retornar un objeto 1', () => {

        const userTes = {
            uid: 'ABC123',
            username: 'El_PapiChulo'
        }

        const user = getUser();

        //! Evaluar objetos
        expect(user).toStrictEqual(userTes);
    })

    test('debe retornar un objeto 2', () => { 

        const nombre = 'Elide ZV';

        const userTest = {
            uid: 'ABC567',
            username: nombre,
            phone: 123456789
        }

        const user = getUsuarioActivo(nombre);

        expect(user).toStrictEqual(userTest);

    });


}); 