const publicar = {
    file: {
        demand: true,
        alias: 'f',
        desc: 'Permite establecer el path del archivo CSV que contiene los datos a analizar'
    },
    country: {
        demand: true,
        alias: 'c',
        desc: 'Permite determinar el país a analizar a través de su código ISO 3166 ALPHA-3.'
    },
    year: {
        alias: 'y',
        default: 2018,
        desc: 'Permite especificar el año para el cual se requiere las estadísticas. Por defecto, 2018.'
    }

}
const guardar = {
    file: {
        demand: true,
        alias: 'f',
        desc: 'Permite establecer el path del archivo CSV que contiene los datos a analizar'
    },
    country: {
        demand: true,
        alias: 'c',
        desc: 'Permite determinar el país a analizar a través de su código ISO 3166 ALPHA-3.'
    },
    year: {
        alias: 'y',
        default: 2018,
        desc: 'Permite especificar el año para el cual se requiere las estadísticas. Por defecto, 2018.'
    },
    out: {
        demand: true,
        alias: 'o',
        desc: ' Establece el nombre del archivo donde se almacenará los resultados.'
    }
}

const argv = require('yargs').command('publicar', ' Este comando publicará las estadísticas en una página web básica.', publicar).command('guardar', ' Este comando almacenará los resultados de las estadísticas en un archivo json.', guardar).argv;

module.exports = {
    argv
}