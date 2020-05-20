const { start } = require("../Controlador/server.js")

function publicar(datos) {
    // Construccion del html
    let html = `<!DOCTYPE html><html><head><meta charset="UTF-8">${style}</head><body><h1 class="titulo">SUSCRIPCIONES A TELEFONÍA CELULAR MÓVIL</h1>`
    let thtable = `<tr><th>Posición</th><th>País</th><th>Código</th><th>Suscripciones</th></tr>`
    html += `<ul class="content"><li colspan="2"><h3>${datos[0].name} en el año ${datos[0].anio}: ${datos[0].suscripciones}</h3></li>`
        //html += `<h3>Cantidad de suscripciones: ${datos[0].suscripciones}</h3>`
    html += `<li><h3>La media global en el año ${datos[0].anio} es ${datos[1]}</h3></li>`;
    html += `<li><h3>${datos[2]}</h3></li></ul>`;
    html += `<table class="content"><tr><td ><h3>Países cercanos a ${datos[0].name}</h3></td><td><h3>Top 5 países</h3></td></tr><tr><td><table id="customers">${thtable}`;
    index = datos[3].index
    for (i in datos[3].up) {
        html += `<tr class="upcolor"><td>${index-4+parseInt(i)}</td><td>${datos[3].up[i]['Country Name'].trim()}</td><td>${datos[3].up[i]['Country Code']}</td><td>${datos[3].up[i][datos[0].anio].trim()}</td></tr>`;
    }
    //html += `</table><table>${thtable}`
    html += `<tr class="midcolor"><td>${index+1}</td><td>${datos[0].name.trim()}</td><td>${datos[0].code}</td><td>${datos[0].suscripciones}</td></tr>`
    for (i in datos[3].down) {
        html += `<tr class="upcolor"><td>${index+2+parseInt(i)}</td><td>${datos[3].down[i]['Country Name'].trim()}</td><td>${datos[3].down[i]['Country Code']}</td><td>${datos[3].down[i][datos[0].anio].trim()}</td></tr>`;
    }
    html += `</table></td><td class="valign"><table id="customers">${thtable}`
    for (i in datos[3].top) {
        html += `<tr class="upcolor"><td>${parseInt(i)+1}</td><td>${datos[3].top[i]['Country Name'].trim()}</td><td>${datos[3].top[i]['Country Code']}</td><td>${datos[3].top[i][datos[0].anio].trim()}</td></tr>`;
    }
    html += `</table></td></tr></table></body></html>`
    return start(html)

}
let style = `<style>
body{
    background-color: aliceblue;
    font-family:ff-tisa-sans-web-pro, sans-serif;
    font-style: normal;
    font-weight: 100;
    
}
.titulo{
    position: relative;
    left:26%
}

.upcolor {
    background-color: #FCF3CF  ;
}

.midcolor {
    background-color: #F0B27A;
}

.downcolor {
    background-color: #AED6F1;
}
#customers {
    border-collapse: collapse;
    width: 100%;
  }
  
  #customers td, #customers th {
    border: 1px solid #ddd;
    padding: 8px;
  }
  #customers tr:hover {background-color: #ddd;}
  #customers th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: #86C232;
    color: white;
  }
  .valign{
    vertical-align: top;
  }
  .content{
    position: relative;
    left:20%
  }
  .content td{
    padding-right: 50px;
  }
  h3{
      margin:0;
  }</style>`
module.exports = {
    publicar
}