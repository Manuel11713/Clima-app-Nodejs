const axios = require('axios');

const getLugarLatLng = async(direccion) => {

    let encodeURL = encodeURI(direccion);

    let respuesta = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURL}&key=AIzaSyDI4vBq3xZ5Q6xos5Bgp8v84_WsP69DVcs`);

    if (respuesta.data.status === 'ZERO_RESULTS') throw new Error(`No hay resultados para la ciudad ${direccion}`);

    let raiz = respuesta.data.results[0].geometry.bounds.northeast;

    return {
        direccion: respuesta.data.results[0].formatted_address,
        lat: raiz.lat,
        lan: raiz.lng
    }
}
module.exports = {
    getLugarLatLng
}