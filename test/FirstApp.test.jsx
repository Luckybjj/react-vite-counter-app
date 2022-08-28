import { getAllByText, render } from "@testing-library/react";
import { FirstApp } from "../src/FirstApp";


describe('Pruebas en <FirstApp />', () => {
    // match con el snapshot
    // se le tomará una fotografía al componente con todas las properties

    // Lo primero será decirle a Babel y a Jest como renderizar el jsx FirstApp
    // se instala el paquete --> yarn add -D jest-environment-jsdom
    // se crea la configuración --> testEnviroment:'jest-enviroment-sjdom', en el archivo jest.config.cjs

    // se instala el paquete --> yarn add -D @babel/preset-react
    // se crea la configuración --> ['@babel/preset-react', {targets: 'automatic'}], en el archivo de babel.config.cjs


    // Prueba muy útil
    // Snapshot

    // render retorna un objeto llamado 'container' que expone algunas propiedades
    // esto crea una carpeta de snapshots
    // la primera vez que se ejecuta el snapshot, toma una fotografia del componente
    // y lo deja almacenado en el snap
    // esto nos sirve para realizar pruebas y se modifica o un componente cambia
    // el snapshot me muestra los errores y modificaciones.
    // para actulizar el snapshot al realizar un cambio en nuestros componentes
    // se presiona la letra u --> de esta forma el archivo FirstApp.test.jsx.snap debiese modificarse.

    // Esto asegura que nustros componentes no cambien de manera accidental
    // esto evalua practicamente todo clases, html, etc.
    // Esto asegura que el componente se mantenga tal cual al momento de tomar la fotografía.

    // test('debe de hacer match con el snapshot', () => {

    //     const title = 'Hola, Soy Goku'
    //     const { container } = render( <FirstApp title={title}/>)
    //     console.log(container); // de parece mucho a un nodo de HTML
    //     expect(container).toMatchSnapshot();        // un uso de 'container' es tomar una fotografía:

    // });

    // Se debe tratar de hacer pruebas flexibles

    test('debe mostrar el título en u h1', () => {

        // Las funciones de React Testing Library son muy útiles para poder analizar rapidamente el DOM
        const title = 'Hola, Soy Goku';
        // getByText --> obtiene algún nodo por un texto
        // container es practicamente un nodo en el DOM
        const { container, getByText, getByTestId } = render(<FirstApp title={title} />);
        expect(getByText(title)).toBeTruthy();

        // const h1 = container.querySelector('h1');
        // console.log(h1.innerHTML);
        // expect(h1.innerHTML).toContain(title)   

        // expect(getByTestId('test-title').innerHTML).toBe(title) // toBe se asegura que sea completamente igual incluyendo los espacios
        expect(getByTestId('test-title').innerHTML).toContain(title) // toContain se asegura que solo contenga lo indicado

    });

    test('debe mostrar el subtitulo mostrado por props', () => {
        const title = 'Hola, Soy Goku';
        const subTitle = 'Soy un subtitulo';
        const { getAllByText } = render(
            <FirstApp
                title={title}
                subTitle={subTitle}
            />
        );
        expect(getAllByText(subTitle).length).toBe(2);

    });
});