
// readJson
export const readJson = async() => {

    const respuesta = await fetch( '../../data.json' );
    return await respuesta.json();

};


// gets
export const getBrands = ( data ) => Object.keys( data );
export const getModalitys = ( data, brand ) => data[ brand ].map( modality => Object.keys( modality )[ 0 ] );
export const getSystemModel = ( data, brand, modality ) => data[brand].find(obj => Object.keys(obj)[0] === modality)[modality];
