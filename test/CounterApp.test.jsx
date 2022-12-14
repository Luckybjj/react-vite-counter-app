import { fireEvent, render, screen } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp";


describe('Pruebas en <CounterApp />', () => {

    const initialValue = 10;

    test('match con el SnapShot', () => {

        const { container } = render(<CounterApp value={initialValue}/>)
        expect(container).toMatchSnapshot();
        
    });

    test('debe de mostara el valor inicial de 100 <CounterApp values={100}/>', () => {

        render(<CounterApp value={100}/>)
        expect( screen.getByText(100)).toBeTruthy();
        expect(screen.getByRole('heading',{level: 2}).innerHTML).toContain('100');

    });

    test('debe incrementar con el boton +1', () => {
        
        render(<CounterApp value={initialValue}/>);
        // fireEvent --> dispara un evento
        fireEvent.click(screen.getByText('+1'))
        // screen.debug()
        expect(screen.getByText('11')).toBeTruthy();

    });

    test('debe decrementar con el boton -1', () => {
        
        render(<CounterApp value={initialValue}/>);
        // fireEvent --> dispara un evento
        fireEvent.click(screen.getByText('-1'))
        // screen.debug()
        expect(screen.getByText('9')).toBeTruthy();

    });

    test('debe de funcionar el botón de reset', () => {
        render(<CounterApp value={355}/>);
        fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByText('Reset'))
         
        fireEvent.click(screen.getByRole('button', {name: 'btn-reset'}));
        // screen.getByRole('button', {name: ''})

        // screen.debug()
        expect(screen.getByText(355)).toBeTruthy();
    });
    
    
});