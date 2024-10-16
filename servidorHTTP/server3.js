const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    console.log('Requisicao recebida');
    console.log(`Método: ${req.method}`);
    console.log(`URL: ${req.url}`);
    
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Olá, mundo!')
});



server.listen(port, hostname, () => {
    console.log(`Servidor rodando em http://${hostname}:${port}/`);
});