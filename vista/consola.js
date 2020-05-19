const colors = require('../Config/theme').colors;

function printConsola(datos) {
    console.log(colors.info(`La media global en el año ${datos[0].anio} es ${datos[1]}`));
    console.log(colors.info(datos[2]));
    console.log(colors.info(`5 Paises arriba de ${datos[0].name} :`));
    for (i in datos[3].up) {
        console.log(`${parseInt(i)+1}) ${datos[3].up[i]['Country Name'].trim()}`);
    }
    console.log(colors.info("---5 por por debajo---"));

    for (i in datos[3].down) {
        console.log(datos[3].down[i]['Country Name'].trim());
    }

    console.log(colors.info("---5 primeros---"));

    for (i in datos[3].top) {
        console.log(datos[3].top[i]['Country Name'].trim());
    }
}
module.exports = {
    printConsola
}