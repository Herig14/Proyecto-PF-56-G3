const getJSON = require("../modelo/importCSV").getJSON
const lookup = require('country-data').lookup;
let total
async function buscarPais(pais, year, json) {
    var jsonOB = json
    let aux
    for (var item in jsonOB) {
        temp = jsonOB[item]['Country Code']
        if (pais == temp) {
            aux = jsonOB[item]
            break;
        }
    }
    return { name: aux['Country Name'], suscripciones: aux[year], anio: year, code: pais }

}

async function mediaAnual(year, json) {
    var jsonOB = json
    let suma = 0
    total = 0
    jsonOB.forEach(element => {
        if (element[year] > 0) {
            total++
            suma += parseInt(element[year])
        }

    });

    return suma / total

}

async function updown5(pais, year, json) {
    let top5, up5, down5
    var jsonOB = json

    function GetSortOrder(prop) {
        return function(a, b) {
            c = parseInt(a[prop], 10)
            d = parseInt(b[prop], 10)
            if (Number.isNaN(c)) {
                c = 0;
            }
            if (Number.isNaN(d)) {
                d = 0;
            }

            if (c < d) {
                return 1;
            } else if (c > d) {
                return -1;
            }
            return 0;
        }
    }
    jsonOB.sort(GetSortOrder(year)); //Pass the attribute to be sorted on
    jsonOB = jsonOB.slice(0, total);
    let jsonTemp = []
    for (var item in jsonOB) {
        temp = jsonOB[item]['Country Code']
        let codeP = lookup.countries({ alpha3: temp })[0];
        if (codeP !== undefined) {
            jsonTemp.push(jsonOB[item])
        }
    }
    jsonOB = jsonTemp
    top5 = jsonOB.slice(0, 5);
    let indexP = 0
    for (var item in jsonOB) {
        temp = jsonOB[item]['Country Code']
        if (pais == temp) {
            break;
        } else {
            indexP++
        }
    }
    down5 = jsonOB.slice(indexP + 1, indexP + 6);

    if (indexP < 6) {
        inicio = 0
        final = indexP
    } else {
        inicio = indexP - 5
        final = indexP
    }
    up5 = jsonOB.slice(inicio, final);
    return { top: top5, up: up5, down: down5, index: indexP }
}

async function analizar(pais, year, csvpath) {
    let errorCode = 'El parámetro country debe ser un código ISO 3166 ALPHA-3.'
    try {
        pais = pais.toUpperCase()
        let codeP = lookup.countries({ alpha3: pais })[0];
        if (codeP == undefined) {
            throw new Error(errorCode)
        }
    } catch (error) { //ISO 3166 ALPHA-3
        throw new Error(errorCode)
    }
    let msg
    let jsonOB = await getJSON(csvpath).then().catch(err => msg = err.message);
    try {
        let paisOB = await buscarPais(pais, year, jsonOB)
        let media = await mediaAnual(year, jsonOB)
        let comparacion
            //Verificar existencia de registros
        if (!Number.isInteger(year) || year < 1960) {
            msg = `El valor del parámetro year deber ser un número mayor o igual a 1960`
            throw new Error(msg)
        } else if (isNaN(media)) {
            msg = `No existen registros para el año ${year}`
            throw new Error(msg)
        } else if (paisOB.suscripciones > media) {
            comparacion = `Las suscripciones de ${paisOB.name} son mayores a la media mundial \n en el año ${year} `
        } else if (paisOB.suscripciones < media && paisOB.suscripciones > 0) {
            comparacion = `Las suscripciones de ${paisOB.name} son menores a  la media mundial \n en el año ${year} `
        } else if (paisOB.suscripciones <= 0) {
            comparacion = `El país ${paisOB.name} no tiene suscripciones resgistradas  en el año ${year}  `
        } else {
            comparacion = `Las suscripciones de ${paisOB.name} son iguales a la media mundial \n en el año ${year} `
        }
        let st = await updown5(pais, year, jsonOB).then().catch(err => console.log(err.message))
        return [paisOB, media, comparacion, st]
    } catch (error) {
        throw new Error(msg)
    }
}
module.exports = {
    mediaAnual,
    buscarPais,
    updown5,
    analizar
}