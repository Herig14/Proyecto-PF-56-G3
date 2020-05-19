website = require("../modelo/server.js").start()

function publicar(datos) {
    // Construccion del html
    let html = "<h1>Aquí construir el doc html</h1>"
    website(html)
}
module.exports = {
    publicar
}