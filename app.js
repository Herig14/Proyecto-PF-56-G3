const argv = require('./config/helpful').argv;
const { analizar } = require('./Controlador/analisis')
    //const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
let comando = argv._[0]
let path = argv.file
let pais = argv.country
let year = argv.year
analizar(pais, year, path)
    .then(datos => {
        console.log(`La media global en el año ${year} es ${datos[1]}`);
        console.log(datos[2]);
        console.log("---5 por encima---");
        for (i in datos[3].up) {
            console.log(datos[3].up[i]['Country Name']);
        }
        console.log("---5 por por debajo---");

        for (i in datos[3].down) {
            console.log(datos[3].down[i]['Country Name']);
        }

        console.log("---5 primeros---");

        for (i in datos[3].top) {
            console.log(datos[3].top[i]['Country Name']);
        }

    })
    .catch()
switch (comando) {
    case 'publicar':
        break;
    case 'guardar':
        console.log("guardar");


        break;

    default:
        console.log("Comando no reconocido");
}

/*
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
*/