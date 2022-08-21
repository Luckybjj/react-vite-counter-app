
// rafc --> shortcut para crear un FuntionalComponent

// Fragmentos
// Permite devolver a un componente multiples elementos.
// permiten agrupar una lista de hijos sin agregar nodos extras al DOM


// Que se puede imprimir en nuestros componentes?
// Cómo hacemos para imprimir en el HTML? ej: una variable --> se utilizan {}
// dentro de las {} puede ir una expresión válida para JS, pero que no sea un objeto 

const newMessage = 'LuckyBjj' // En React si una declaracion es constante,
// No es recomendable que esté dentro del FuntionalComponent
// Así React no reprocesa cosas agenas al componente

const objeto = {
    message: 'Hola Mundo',
    title: 'Lucky',
}

const getSuma = () => {
    const suma = 4 + 4;
    return (`Resultado de la suma ${suma}`) 
}

const getResta = (a, b) => {
    const suma = a - b;
    return (`Resultado de la resta ${suma}`) 
}

export const FirstApp = ({ title, subTitle }) => {

    // console.log(props);

    return (
        <>
            {/* Props */}
            <h1>{ title }</h1>
            <p>{ subTitle + 2 }</p>

            <h1>{newMessage}</h1>
            <h2>{1 + 2 * 5}</h2>
            <h3>{ getSuma() }</h3>
            <h3>{ getResta(9,3) }</h3>
            <h3>{objeto.message}</h3>
            <h3>{objeto.title}</h3>
            <p>Soy un Subtitilo</p>
            {/* si se necesitara imprimir un objeto de forma literal*/}
            <code>{JSON.stringify(objeto)}</code>
        </>

    )
}
