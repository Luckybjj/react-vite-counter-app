import PropTypes from 'prop-types';

// Si se trabaja con vite se debe instalar la dependencia de forma manual
// yarn add prop-types
// cuando se trabaja con CRA, ya viene instalada la dependencia

// Las propTypes nos sirven para definir el tipo de las propiedades


export const FirstApp = ({ title, subTitle, name }) => {

    return (
        <>
            {/* Props */}
            <h1>{ title }</h1>
            <p>{ subTitle }</p>
            <p>{ name }</p>

        </>

    )
}
// propTypes --> define el tipo de las props
// isRequired --> arroja un error cuando la propiedad no es enviada
FirstApp.propTypes = {
    title: PropTypes.string.isRequired, 
    subTitle: PropTypes.number,
}

// defaultProps --> asigna valores por defecto a las props, estos son aginados antes que los propTypes
FirstApp.defaultProps = {
    name: 'LuckyBJJ',
    subTitle: 1234,
    title: 'No hay título',
}