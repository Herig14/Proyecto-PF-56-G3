const getJSON = require("../modelo/importCSV").getJSON

async function buscarPais(pais, year, json) {
    pais = pais.toUpperCase()
    var jsonOB = json
    let aux
    jsonOB.forEach(element => {
        temp = element['Country Code']
        if (pais == temp) {
            aux = element
                //no es optimo
        }
    });
    return { name: aux['Country Name'], suscripciones: aux[year] }

}

async function mediaAnual(year, json) {
    var jsonOB = json
    let suma = 0
    total = jsonOB.length
        /*        //Comparer Function    
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

           jsonOB.sort(GetSortOrder("2015")); //Pass the attribute to be sorted on    
           console.log(("Sorted Employee Names : "))
           tempasdf = 0
           for (var item in jsonOB) {
               if (tempasdf > 4) {
                   return
               }
               console.log((jsonOB[item]["2015"]))
               tempasdf++
           }
        */

    jsonOB.forEach(element => {

        if (element[year] > 0) {
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
    top5 = jsonOB.slice(0, 5);
    indexP = 0
    for (var item in jsonOB) {
        temp = jsonOB[item]['Country Code']
        if (pais == temp) {
            break;
        } else {
            indexP++
        }
    }
    //console.log(jsonOB.length);
    down5 = jsonOB.slice(indexP + 1, indexP + 6);
    up5 = jsonOB.slice(indexP - 6, indexP - 1);

    /* 
    Solo eso!!!
    for (let i = 0; i < 5; i++) {
    console.log("top--->", i + 1, top5[i]["Country Code"])
    console.log("top--->", i + 1, top5[i]["2015"])
    console.log("down--->", i + 1, down5[i]["Country Code"])
    console.log("up--->", i + 1, up5[i]["Country Code"])
}*/
    //    console.log(up5)
    //  console.log(indexP);
    return { top: top5, up: up5, down: down5 }
}

async function analizar(pais, year, csvpath) {
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
        //console.log(st);
    return [paisOB, media, comparacion, st]


}
//Luego vemos !!!!!!!!!!!!!!!!!!!!
///validar que si cogemos el top, no van a existir valores hacia arriba :v

//buscarPais("IBT", "2015", "./modelo/data.csv").then(salida => console.log(salida)).catch()
//mediaAnual("1997", "./modelo/data.csv").then(salida => console.log(salida)).catch()
//updown5("ECU", "2015", "./modelo / data.csv ").then(salida => console.log(salida)).catch()
module.exports = {
    mediaAnual,
    buscarPais,
    updown5,
    analizar
}

/*
analizar("ECU", "2015", "./modelo/data.csv")
    .then(salida => console.log(salida))
    .catch() */