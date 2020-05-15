/* const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;
http.e
////function ServerRun() {
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>Hello </h1>');
});
////}


server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
}); */
let hola = 0
const http = require('http')

const server = http.createServer(function(request, response) {
    console.dir(request.param)

    if (request.method == 'POST') {
        console.log('POST')
        var body = ''
        request.on('data', function(data) {
            body += data
            console.log('Partial body: ' + body)
        })
        request.on('end', function() {
            console.log('Body: ' + body)
            response.writeHead(200, { 'Content-Type': 'text/html' })
            response.end('post received')
            hola++
        })
    } else {
        console.log('GET')
        var html = `
            <html>
                <body>
                    <form method="post" action="http://localhost:3000">Name: 
                        <input type="text" name="name" />
                        <input type="submit" value="Submit" />
                    </form>
                </body>
            </html>`
        response.writeHead(200, { 'Content-Type': 'text/html' })
        if (hola > 0) {
            response.end(`
            <html>
                <body>
                ${hola}
                </body>`)
        } else {
            response.end(html)

        }
    }
})


const port = 3000
const host = '127.0.0.1'
server.listen(port, host)
console.log(`Listening at http://${host}:${port}`)