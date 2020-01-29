const axios = require('axios');

const getLugarLatLng = async(direccion) => {

    const encoderUrl = encodeURI(direccion);
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${ encoderUrl }`,
        headers: { 'X-RapidAPI-Key': '6FT8BVoX6fmshwvvLDzt4SVrjbgWp1PxzJ1jsnraNyUeIisWPh' }
    });

    const resp = await instance.get() || [];

    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${ direccion }`);
    }

    const data = resp.data.Results[0];
    const dir = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        dir,
        lat,
        lng
    };

};

module.exports = {
    getLugarLatLng
};