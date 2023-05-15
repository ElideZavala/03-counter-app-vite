import { getHeroeById, getHeroesByOwner } from "../../base-pruebas/08-imp-exp";
import heroes from "../../data/heroes";

/* eslint-disable no-undef */
describe('Pruebas en el archivo 08-imp-exp.test.js', () => {
    console.log(heroes);
    test('debe retornar un heroe por id', () => {
        const id = 1;
        const hero = getHeroeById(id);

        expect(hero).toEqual({
            id: 1,
            name: 'Batman',
            owner: 'DC'
        })
    });
    
    test('getHeroeById() debe retornar undefined si no existe el id', () => {
        const id = 100;
        const hero = getHeroeById(id);
        // expect(hero).toBe(undefined);
        expect(hero).toBeFalsy();

    });

    test('getHeroeByOwner() debe retornar un arreglo con los heroes de DC', () => {
        const owner  = 'DC';
        const heroes = getHeroesByOwner(owner);
        expect( heroes ).toEqual( heroes.filter( (heroe) => heroe.owner === owner ));
        expect(heroes.length).toBe(3);
    });

    test('getHeroeByOwner() debe retornar un arreglo con los heroes de Marvel', () => {
        const owner  = 'Marvel';
        const heroes = getHeroesByOwner(owner);
        expect( heroes ).toEqual( heroes.filter( (heroe) => heroe.owner === owner ));
        expect(heroes.length).toBe(2);
    });
})