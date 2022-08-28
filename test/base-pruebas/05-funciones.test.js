import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

describe('Pruebas en 05-funciones', () => {

    test('getUser debe de retornar un objeto', () => {

        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502',

        }

        const user = getUser();
        // console.log(user);

        // expect(testUser).toBe(user); // toBe arroja error al comparar

        // Utilizando .toStrictEqual, tambien .toEqual
        expect(testUser).toStrictEqual(user)    // Es este caso la se pasa la prueba

        // Se observa que el test da error, esto sucede por lo siguiente.
        // Cuando se comparan dos Objetos en JavaScript, aunque sean literalmente iguales,
        // estos (a diferencia de las variables), apuntan a dos lugares de memoria distintos
        // Los objetos se comparan en base a su ubicación en memoria.
        // Esta es la razón por que no se cumple la condición toBe

        // Si quieres evaluar dos objetos se recomienda utilizar el .toStrictEqual

    });


    // TAREA
    test('getUsuarioActivo debe de retornar un objeto', () => {

        const nombre = 'Lucky'

        const usuarioActivo = getUsuarioActivo(nombre)

        const testUsuarioActivo = {
            uid: 'ABC567',
            username: nombre
        }
        expect(testUsuarioActivo).toEqual(usuarioActivo)
    })

})


