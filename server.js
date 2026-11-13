const http = require('node:http');
const fs = require('node:fs');
const { yellowBold } = require('./colores');


const processRequest = (req, res) => {
    if (req.url === '/') {
        fs.readFile('html/index.html', (err, data) => {
            if (err) {
                console.log(err);
                return;
            }
            
            res.statusCode = 200;
            res.end(data);
        });
    } else if (req.url === '/api') {
        fs.readFileSync('html/api.html', (err, data) => {
            if (err) {
                console.log(err);
                return;
            }
            
            res.statusCode = 200;
            res.end(data);
        });
    } else if (req.url === '/clientes') {
        fs.readFileSync('html/clientes.html', (err, data) => {
            if (err) {
                console.log(err);
                return;
            }
            
            res.statusCode = 200;
            res.end(data);
        });
    } else if (req.url === '/pedidos') {
        fs.readFileSync('html/pedidos.html', (err, data) => {
            if (err) {
                console.log(err);
                return;
            }
            
            res.statusCode = 200;
            res.end(data);
        });
    } else {
        res.statusCode = 404;
        res.end(`Error ${res.statusCode}: No encontrado`)
    }
}

const server = http.createServer(processRequest);

server.listen(0, () => {
    console.log(yellowBold(`Server listening on port ${server.address().port}`));
})