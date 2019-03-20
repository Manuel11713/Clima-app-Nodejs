const axios = require('axios');


const getClima = async(lat, lon) => {


    // if (isNaN(lon) || isNaN(lat)) {
    //     throw new Error("Las coordenas no son validas")
    // }

    let respuesta = await axios.get(`https://api.openweathermap.org/data/2.5/find?lat=${lat}&lon=${lon}&units=metric&appid=379cf6a0d696a58657afb74c7ef040a8`);


    return JSON.stringify(respuesta.data.list[0].main.temp, undefined, 2);

}
module.exports = {
    getClima
}