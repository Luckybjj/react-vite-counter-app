
describe('Pruebas en <DemoComponent />', () => {
    
    test('Esta prueba no debe de fallar', () => {
        // Las pruebas usualmente tienen los siguientes pasos
        // 1. inicialización
        const message1 = 'Hola Mundo'
        // 2. estímulo
        const message2 = message1.trim();   // .trim() --> elimina los espacios en blanco de ambos lados de una cadena
        // 3. Observar el comportamiento... esperado
        expect(message1).toBe(message2);
    
    })
    
});







