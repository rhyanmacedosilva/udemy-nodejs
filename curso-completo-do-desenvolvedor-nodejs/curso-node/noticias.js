let http = require('http');

let server = http.createServer((req, res) => {
    let categoria = req.url;

    if (categoria == '/tecnologia') {
        res.end('<html><body><h1>Portal de Tecnologia</h1></body></html>');
    } else if (categoria == '/moda') {
        res.end('<html><body><h1>Portal de Moda</h1></body></html>');
    } else if (categoria == '/beleza') {
        res.end('<html><body><h1>Portal de Beleza</h1></body></html>');
    } else {
        res.end('<html><body><h1>Portal de News</h1></body></html>');
    }
});

server.listen(4100);