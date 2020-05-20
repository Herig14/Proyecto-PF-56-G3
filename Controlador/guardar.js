const GJSON = require("../modelo/exportJSON")

function toJson(datos, name) {
    let arriba = []
    let abajo = []
    let top = []
        //Construccion JSON
    for (i in datos[3].up) {
        temp = {}
        arriba.push({ name: datos[3].up[i]['Country Name'].trim(), code: datos[3].up[i]['Country Code'], subs: datos[3].up[i][datos[0].anio] });
    }
    for (i in datos[3].down) {
        abajo.push({ name: datos[3].down[i]['Country Name'].trim(), code: datos[3].down[i]['Country Code'], subs: datos[3].down[i][datos[0].anio] });
    }
    for (i in datos[3].top) {
        top.push({ name: datos[3].top[i]['Country Name'].trim(), code: datos[3].top[i]['Country Code'], subs: datos[3].top[i][datos[0].anio] });
    }
    var sampleObject = {
        paisConsultado: { name: datos[0].name, code: datos[0].code, valor: datos[0].suscripciones, año: datos[0].anio },
        media: datos[1],
        comparacion: datos[2],
        up: arriba,
        down: abajo,
        top: top
    };
    return GJSON.getJSON(sampleObject, name)
}
module.exports = {
    toJson
}