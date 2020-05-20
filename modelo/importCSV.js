var fs = require("fs");
const csv = require('csvtojson/v2')


let readCSV = async(path) => {
    var csvStr
    try {
        csvStr = fs.readFileSync(path, "utf-8");
    } catch (error) {
        throw new Error(`El archivo csv no existe`)
    }
    if (csvStr.indexOf("IT.CEL.SETS") > 0 && csvStr.indexOf("Country") > 0 && csvStr.indexOf("IT.CEL.SETS") && csvStr.indexOf("Country") == 94) {
        csvStr = csvStr.substring(csvStr.indexOf("Country") - 1);
        return csv().fromString(csvStr).then((jsonObj) => jsonObj)
    } else {
        throw new Error(`El Archivo no tiene el formato correcto`);
    }



}
let getJSON = async(path) => {
    let data = await readCSV(path);
    return data;
}

/* getJSON("./modelo/data copy.csv").then(data => {
    console.log(data[0]['Country Name']);
}).catch(err => console.log(err.message));  */

module.exports = {
    getJSON
}