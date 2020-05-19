var fs = require("fs");

function getJSON(sampleObject, name) {
    fs.writeFile(`./${name}.json`, JSON.stringify(sampleObject, null, 4), (err) => {
        if (err) {
            console.error(err);
            return;
        };
        console.log("File has been created");
    });

}
module.exports = {
        getJSON
    }
    /* Estructura
          var sampleObject = {
              paisc:{name=asdf,code=,valor=}
              año:
              media: 12,
              valor:,
              comparacion: 'tal pais tiene una media mayor a la global',
              up: 'arriba',
              down: 'abajo',
              top: 'a'
          };

          getJSON(sampleObject, "hola")

          */