const colors = require('../Config/theme').colors;

const center = require('center-align');


const { Table } = require('console-table-printer');
const cercanos = new Table({
    columns: [{ name: 'Posición', alignment: 'center', color: 'white' }, { name: 'Pais', alignment: 'left' }, { name: 'Código', alignment: 'center' }, { name: 'Suscripciones', alignment: 'center' }]
});
const tops = new Table({
    columns: [{ name: 'Posición', alignment: 'center', color: 'white' }, { name: 'Pais', alignment: 'left' }, { name: 'Código', alignment: 'center' }, { name: 'Suscripciones', alignment: 'center' }]
});

function printConsola(datos) {
    console.log(colors.titulos(
        '______________________________________________________________\n|             UNIVERSIDAD POLITÉCNICA SALESIANA              |\n|          INGENIERÍA EN CIENCIAS DE LA COMPUTACIÓN          |\n|                  PROYECTO PLATAFORMAS WEB                  |\n|             SUSCRIPCIONES A TELEFONÍA CELULAR              |\n|____________________________________________________________|\n'));
    console.log(colors.info(`- La media global en el año ${datos[0].anio} es ${datos[1]}\n`));
    console.log(colors.info(`- ${datos[2]}\n`));
    console.log(colors.data(`- Paises cercanos a ${datos[0].name} :`));
    // obtener posición del país ingresado
    let index = datos[3].index + 1
        //Añadir Los 5 paises hacia arriba
    for (i in datos[3].up) {
        cercanos.addRow({ Posición: index - 5 + parseInt(i), Pais: `${datos[3].up[i]['Country Name'].trim()}`, Código: datos[3].up[i]['Country Code'], Suscripciones: datos[3].up[i][datos[0].anio] }, { color: 'cyan' })
    }
    //Añadir pais de búsqueda en el centro de la tabla
    cercanos.addRow({ Posición: index, Pais: `${datos[0].name}`, Código: `${datos[0].code}`, Suscripciones: `${datos[0].suscripciones}` }, { color: 'yellow' })
        //Añadir los 5 paises hacia abajo
    for (i in datos[3].down) {
        cercanos.addRow({ Posición: index + 1 + parseInt(i), Pais: `${datos[3].down[i]['Country Name'].trim()}`, Código: datos[3].down[i]['Country Code'], Suscripciones: datos[3].down[i][datos[0].anio] }, { color: 'green' })
    }


    //Imprimir toda la tabla up, down
    cercanos.printTable();
    //Añadir a la tabla los tops mundiales de suscripciones
    console.log(colors.data("- Paises Top 5 con suscripciones telefónicas"));
    let t = 0
    for (i in datos[3].top) {
        tops.addRow({ Posición: t += 1, Pais: `${datos[3].top[i]['Country Name'].trim()}`, Código: datos[3].top[i]['Country Code'], Suscripciones: datos[3].top[i][datos[0].anio] }, { color: 'cyan' })
    }
    tops.printTable();
    console.log("\n");
}

function printmsg(str, typemsg) {
    switch (typemsg) {
        case "error":
            console.log(colors.error(str));
            break
        case "warn":
            console.log(colors.warn(str));
            break
        case "link":
            console.log(colors.warn(str.substring(0, 26)), colors.data(str.substring(26, 49)), colors.warn(str.substring(49, str.length)));
            break
        case "titulos":
            console.log(colors.titulos(str));
            break
        default:
            console.log(colors.data(str))
            break
    }
}
module.exports = {
    printConsola,
    printmsg
}