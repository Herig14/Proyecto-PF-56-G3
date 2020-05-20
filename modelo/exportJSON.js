const fs = require("fs");

function getJSON(sampleObject, name) {
    //Ruta donde se va a crear el archivo JSON
    let ruta = `./${name}.json`
    fs.writeFile(ruta, JSON.stringify(sampleObject, null, 4), (err) => {
        if (err) {
            console.log(err);
        };
    });
    let msg = "El archivo JSON fue creado"
    var fullpath = __dirname + `\\vista\\archivosjson\\${name}.json`
    return { mensaje: msg, path: fullpath };
}
module.exports = {
    getJSON
}