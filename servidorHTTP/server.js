const http = require('http');

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>Olá, mundo!</h1>')
});


const hostname = '127.0.0.1';
const port = 3000;

server.listen(port, hostname, () => {
    console.log(`Servidor rodando em http://${hostname}:${port}/`);
});