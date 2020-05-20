![GitHub](https://img.shields.io/github/license/herig14/Proyecto-PF-56-G3) ![GitHub](https://img.shields.io/bundlephobia/minzip/mobile-subs-stats)
# Proyecto Plataformas Web
# Universidad Politécnica Salesiana


_Crear una aplicación en NodeJS que permita leer los datos de las
Suscripciones a telefonía celular móvil, publicadas por el Banco
Mundial y publicar las estadísticas de un determinado país en un
año específico._

## Comenzando 🚀

### Pre-requisitos 📋
#### Descarga e instala Node.js y npm
1. Linux <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Tux.svg/1200px-Tux.svg.png" alt="Lin Logo" width="25" height="25" /> o Windows <img src="https://es.seaicons.com/wp-content/uploads/2015/10/OS-Windows-icon.png" alt="Win Logo" width="25" height="25" /> 

  - _[Node.js 12.16.3 LTS](https://nodejs.org/es/) o superior._
  
  - _Mediante una terminal._
```
sudo apt install nodejs
```

  - _Gestor de paquetes npm 6.14.4 o superior._
```
sudo install npm@latest -g
```
  - _Actualizar y Upgrade_
```
sudo apt-get update
sudo apt-get upgrade
```
3. Datos Banco Mundial
  - _Descarga de los datos en formato [CSV](https://datos.bancomundial.org/indicador/IT.CEL.SETS)._

### Instalación de nuestra APP 🔧

_Para la ejecucion de la app desarrollada en node.js simplemente instala_

```
sudo npm i mobile-subs-stats -g
```
### Ayuda / Comandos ⚙️ 📦
* _**-c** *code* Código ISO 31 ALPHA-3 de los paises._
* _**-y** *year* Año (Desde 1960 - Hasta 2019)._
* _**-f** *file* Path(Ruta) de los datos del Banco Mundial._
* _**-o** *output* Nombre del JSON._
```
mobile-subs --help
mobile-subs publicar -c -y -f
mobile-subs guardar -c -y -f -o
```

### Ejemplo 🔩

_La ejecución se lleva a cabo con el siguiente comando **Asegurate** de haber descargado los datos del banco mundial y **también** colocar correctamente el path(ruta)_
```
mobile-subs publicar -c ECU -f './API_IT.CEL.SETS_DS2_es_csv_v2_1072836.csv'
```


### Output del Ejemplo ⌨️

<img src="https://github.com/Bolo10/Test/blob/master/Screenshot%20from%202020-05-20%2004-16-43.png?raw=true" alt="Lin Logo" width="719" height="794" />


## Construido con 🛠️

_Las herramientas utilizadas en el desarrollo del proyecto son las siguientes:._

* [NodeJS](https://nodejs.org/) - Entorno de ejecución para JavaScript
* [NPM](https://www.npmjs.com/) - Manejador de dependencias
* [VisualStudio](https://code.visualstudio.com/?wt.mc_id=DX_841432) - Editor de código

## Nuestro paquete NPM 📖

Puedes encontrar mucho más de cómo utilizar este proyecto en nuestra [Wiki](https://www.npmjs.com/package/mobile-subs-stats)

## Autores ✒️

_Menciona a todos aquellos que ayudaron a levantar el proyecto desde sus inicios_

* **Alexander Pogo** - *Trabajo Inicial* - [AlexanderPx](https://github.com/AlexanderPx)
* **Herig Recalde** - *Documentación* - [Herig14](https://github.com/Herig14)
* **Santiago Soria** - *Trabajo Inicial* - [lsoriac](https://github.com/lsoriac)
* **Erick Tapia** - *Documentación* - [Bolo10](https://github.com/Bolo10)

También puedes mirar la lista de todos los [contribuyentes](https://github.com/Herig14/Proyecto-PF-56-G3/contributors) quíenes han participado en este proyecto. 

## Licencia 📄

Este proyecto está bajo la Licencia MIT - mira el archivo [LICENSE](LICENSE) para detalles


☕ 🍺 📢 🍺 🎁



---
Plantilla README:
[Villanuevand](https://github.com/Villanuevand)
