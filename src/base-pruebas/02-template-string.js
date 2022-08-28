


// const nombre   = 'Fernando';
// const apellido = 'Herrera';


// // const nombreCompleto = nombre + ' ' + apellido;
// const nombreCompleto = `${ nombre } ${ apellido }`;

// console.log( nombreCompleto );


// Paso 01: exportar el código que se quiere testear

export function getSaludo(nombre) {
    return 'Hola ' + nombre;
}

const nombre = 'Pedro'
console.log( `Este es un texto: ${ getSaludo( nombre ) }  ` );