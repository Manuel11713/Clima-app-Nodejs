let { getLugarLatLng } = require('./lugar/lugar');
let { getClima } = require('./clima/clima');
const axios = require('axios');


const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad',
        demand: true
    }
}).argv;


let getInformacion = async() => {

    let lugar = await getLugarLatLng(argv.direccion);
    let temperatura = await getClima(lugar.lat, lugar.lan)
    return `La temperatura en ${lugar.direccion} es de: ${temperatura}`
}

getInformacion()
    .then(respuesta => console.log(respuesta))
    .catch(error => console.log(error.message));