
import { useState } from "react";
import PropTypes from 'prop-types';


// Se debe tener claro que:
// Cuando hay un cambio en el estado de un hook se vuelve a ejecutar el componente
export const CounterApp = ({ value }) => {
    
const [ counter, setCounter ] = useState(value) // value --> valor inicial del counter, que viene desde el componente padre

    const handleAdd = () => {
        // Cuando se llama un setCounter, se le dice a React que el estado del componente a cambiado.
        // Por lo cual React tendrá que volver a renderizar el componente
        setCounter(counter + 1);
        
        // Otra forma de combiar el counter
        // setCounter( (c) => c + 1 )
    }

    const resta = () => setCounter(counter - 1);

    const reset = () => setCounter( value )
    
    return (
        <>
            <h1>CounterApp</h1>
            <h2> {counter} </h2>

            <button onClick={ handleAdd }> +1 </button>
            <button onClick={ resta }> -1 </button>
            <button aria-label="btn-reset" onClick={ reset }> Reset </button>
        </>
    )
}


CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}