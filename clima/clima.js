const axios = require('axios');

const getClima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=2e6f47a5ec1577b301f49b2bee7aa55f&units=metric`);

    if (!resp.data.main.temp) {
        throw new Error(`No hay resultados para la posición dada`);
    }

    return resp.data.main.temp;

};

module.exports = {
    getClima
};