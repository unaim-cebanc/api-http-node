const http = require('node:http');
const fs = require('node:fs');
const { yellowBold, greenBold, redBold } = require('./colores');


function verificarUrl(url) {
    const rutas = ['/api', '/clientes', '/pedidos']
    
    if (url === '/') {
        return { archivo: 'html/index.html', statusCode: 200}
    }
    if (rutas.includes(url)) {
        return { archivo: `html${url}.html`, statusCode: 200 }
    }
    return { archivo: 'html/notFound.html', statusCode: 404 }
}

function logRequest(req) {
    console.log(yellowBold('\n---------- REQUEST ----------'));
    console.log(yellowBold(`Requestl URL: ${req.url}`));
    console.log(yellowBold(`Request Method: ${req.method}`));
}

function logResponse(res) {
    console.log(yellowBold('\n---------- RESPONSE ----------'));
    if (res.statusCode === 200) {
        console.log(greenBold('Response sent: OK'));
        console.log(greenBold(`Status code: ${res.statusCode}`));
    } else {
        console.log(redBold('Response sent: Not Found 404'));
        console.log(redBold(`Status code: ${res.statusCode}`));
    }
}

const processRequest = (req, res) => {
    
    logRequest(req);
    
    const resultado = verificarUrl(req.url);
    const archivo = resultado.archivo
    res.statusCode = resultado.statusCode
    
    fs.readFile(archivo, (err, data) => {
        if (err) {
            console.log(err);
            return;
        }
        res.end(data);
    });
    
    logResponse(res);
}

const server = http.createServer(processRequest);

server.listen(0, () => {
    console.log(yellowBold(`Server listening on port ${server.address().port}`));
})