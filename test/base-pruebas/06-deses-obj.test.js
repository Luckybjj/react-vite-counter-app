import { usContext } from "../../src/base-pruebas/06-deses-obj";



describe('06-deses-obj', () => {

    test('usContext debe retornar un objeto', () => {
        
        const clave = 123;
        const nombre = 'Lucky';
        const edad = 32;
        const rango = 'Capitán'

        const context = usContext({clave, nombre, edad, rango});

        const testContext = {
            nombreClave: clave,
            anios: edad,
            latlng: {
                lat: 14.1232,
                lng: -12.3232
            }

        }

        expect(testContext).toEqual(context)

    });

});



