import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";

describe('Pruebas en 09-promesas', () => {

    test('getHeroeByIdAsync debe de retornar un héroe', (done) => {

        const id = 1;
        getHeroeByIdAsync(id)

            // como Jest trabaja de forma sícrona, y en este caso se esta trabajando
            // con una promesa, debemos indicar que se esta a la esperando una respuesta de una promesa
            // Jest tiene una forma para indicar que se espera una promesa
            // en el argumento se envia "done", que luego se ejecuta como función al final del test


            .then(hero => {



                expect(hero).toEqual({

                    id: 1,
                    name: 'Batman',
                    owner: 'DC'

                });

                done()

            });



    });

    test('getHeroeByIdAsync debe de obtener un error si héroe no existe', (done) => {

        const id = 100;
        getHeroeByIdAsync(id)
            .then( hero => {
                expect(hero).toBeFalsy();
                done()
            })
            .catch(error => {

                expect(error).toBe(`No se pudo encontrar el héroe ${id}`)
                
                // console.log(error);
                done();
            })
    });
});