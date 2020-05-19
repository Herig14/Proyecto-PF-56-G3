const getJSON = require("../modelo/importCSV").getJSON
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
    return { name: aux['Country Name'], suscripciones: aux[year], anio: year }

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
    return { top: top5, up: up5, down: down5 }
}

async function analizar(pais, year, csvpath) {
    pais = pais.toUpperCase()
    let jsonOB = await getJSON(csvpath).then().catch(err => console.log(err.message));
    let paisOB = await buscarPais(pais, year, jsonOB)
    let media = await mediaAnual(year, jsonOB)
    let comparacion
    if (paisOB.suscripciones > media) {
        comparacion = `El valor de las suscripciones de ${paisOB.name} es mayor a la media mundial en el año ${year} `
    } else if (paisOB.suscripciones < media) {
        comparacion = `El valor de las suscripciones de ${paisOB.name} es menor a la media mundial en el año ${year} `
    } else if (paisOB.suscripciones <= 0) {
        comparacion = `El país ${paisOB.name} no tiene resgistradas suscripciones en el año ${year}  `
    } else {
        comparacion = `El valor de las suscripciones de ${paisOB.name} es igual a la media mundial en el año ${year} `
    }
    let st = await updown5(pais, year, jsonOB).then().catch(err => console.log(err.message))
    return [paisOB, media, comparacion, st]


}
module.exports = {
    mediaAnual,
    buscarPais,
    updown5,
    analizar
}