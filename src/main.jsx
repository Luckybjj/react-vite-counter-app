import React from 'react';
// importciones necesarias para renderizar la aplicación
import ReactDOM from 'react-dom/client';
import { CounterApp } from './CounterApp';
import { FirstApp } from './FirstApp';
import { HelloWordApp } from './HelloWordApp';

// Importación de los estilos CSS
import './styles.css'

// Usualmente en React todo coienta con un FuntionalComponent --> componentes basados en funciones
// es el punto de entrada de nuestra aplicación --> no es mas que una función

// se puede trabajar con clases, pero ya no se aconceja trabajar con clases en React

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/* <HelloWordApp /> */}

        {/* Acá es donde se definen las "Props"
        TEstas se mandan desde el componente padre hacia el componente hijo */}
        {/* <FirstApp title='Hola, Soy Vegeta'/> */}
        <CounterApp value={ 10 }/>
    </React.StrictMode>
);

