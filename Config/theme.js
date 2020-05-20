const colors = require('colors/safe')

colors.setTheme({
    titulos: ['blue', 'bold'],
    silly: 'rainbow',
    input: 'grey',
    verbose: 'cyan',
    prompt: 'grey',
    info: 'brightGreen',
    data: 'brightMagenta',
    help: 'cyan',
    warn: 'yellow',
    debug: 'blue',
    error: 'red'

});
module.exports = {
    colors
}