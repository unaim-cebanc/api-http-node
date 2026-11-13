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
        })
    }
}

const server = http.createServer(processRequest);

server.listen(0, () => {
    console.log(yellowBold(`Server listening on port ${server.address().port}`));
})