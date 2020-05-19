//Importación de módulos
const argv = require('./Config/helpful').argv;
const { analizar } = require('./Controlador/analisis')
const { printConsola } = require('./vista/consola')
let comando = argv._[0]
let path = argv.file
let pais = argv.country
let year = argv.year
let data = "hola"


let procesar = (callback) => {
    analizar(pais, year, path)
        .then(datos => {
            data = datos
                //encabezadoooooo
            printConsola(datos)
        })
        .catch()
    callback();
}

function switchF() {
    console.log(data);
    switch (comando) {
        case 'publicar':

            break;
        case 'guardar':

            break;

        default:
            console.log("Comando no reconocido");
    }
}
procesar(switchF)