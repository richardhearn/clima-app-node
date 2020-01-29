const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad de la cual se quiere conocer el clima',
        demand: true
    }
}).argv;



const getInfo = async(direccion) => {

    const info = await lugar.getLugarLatLng(direccion);

    clima.getClima(info.lat, info.lng)
        .then(resp => {
            console.log(`Temperatura de ${ info.dir } es de ${ resp }`);
        })
        .catch(err => {
            console.log(`No se pudo determinar la temperatura de ${ direccion }`);
        });

};

getInfo(argv.direccion);