import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";
import heroes from "../../src/data/heroes";

describe('Pruebas en 08-imp-exp', () => {

    test('getHeroById debe retornar un héroe por ID', () => {

        const id = 1;
        const hero = getHeroeById(id)
        console.log(hero);

        expect(hero).toEqual({ id: 1, name: 'Batman', owner: 'DC' })


    });


    test('getHeroById debe retornar un undefined si no existe id', () => {

        const id = 100;
        const hero = getHeroeById(id)
        console.log(hero);

        expect(hero).toBeFalsy()

    });

    // Tarea:
    // Debe retornar un arreglo con los héroes de DC
    // Length === 3
    // toEqual al arreglo filtrado

    // debe de retornar un arreglo con los héroes de Marvel
    // length === 2

    test('getHeroesByOwner debe retornar un arreglo con los héroes de DC', () => {

        const owner = 'DC';
        const heroByOwner = getHeroesByOwner(owner)
        const length = 3
     


        expect(heroByOwner.length).toBe(length);
        expect(heroByOwner).toEqual([
            {
                id: 1,
                name: 'Batman',
                owner: 'DC'
            },
            {
                id: 3,
                name: 'Superman',
                owner: 'DC'
            },
            {
                id: 4,
                name: 'Flash',
                owner: 'DC'
            },
        ]);
        // El beneficio de realizarlo de esta manera es que el arreglo puede cambiar
        // tener más héroes
        expect(heroByOwner).toEqual(heroes.filter((heroe) => heroe.owner === owner))

        console.log(heroByOwner);
    });


    test('getHeroesByOwner debe retornar un arreglo con los héroes de Marvel', () => {

        const owner = 'Marvel';
        const heroByOwner = getHeroesByOwner(owner)
        const length = 2

        
        expect(heroByOwner.length).toBe(length);
        expect(heroByOwner).toEqual(heroes.filter((heroe) => heroe.owner === owner))

        console.log(heroByOwner);
    });




});