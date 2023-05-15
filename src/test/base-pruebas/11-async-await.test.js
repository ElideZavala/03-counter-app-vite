import { getImagen } from "../../base-pruebas/11-async-await";

/* eslint-disable no-undef */
describe('Pruebas en el archivo 11-async-await.test.js', () => {
    test('debe retornar una URL de la Imagen', async () => {
        const url = await getImagen();
        expect( typeof url).toBe('string');
    })
});
