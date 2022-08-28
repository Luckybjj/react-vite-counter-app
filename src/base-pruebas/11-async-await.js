

export const getImagen = async() => {

    try {

        // Para obtener una apiKey
        // https://developers.giphy.com/
        const apiKey = '3LwmuadSIafrPxycb5OP8GM16YyMjlLR';
        const resp   = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json(); 

        const { url } = data.images.original;   // esta linea dispara el error

        return url;


    } catch (error) {
        // manejo del error
        // console.error(error)
        return 'No se encontró la imagen'
        
    }
    
}

 getImagen();



