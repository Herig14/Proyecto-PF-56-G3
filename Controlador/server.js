const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

function start(hmtlcode) {
    const server = http.createServer((req, res) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end(hmtlcode);
    });
    server.listen(port, hostname, () => {
        console.log(`Server running at http://${hostname}:${port}/`);
    });
}
module.exports = {
    start
}