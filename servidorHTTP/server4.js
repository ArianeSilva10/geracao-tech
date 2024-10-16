const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;
const url = require('url');

const server = http.createServer((req, res) => {
    const parseUrl = url.parse(req.url, true);
    const {pathname, query} = parseUrl;
    console.log(`Caminho: ${pathname}`);
    console.log(`Parâmetros: ${JSON.stringify(query)}`);
    
    
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({mensagem: 'Olá, mundo!', query}));
});



server.listen(port, hostname, () => {
    console.log(`Servidor rodando em http://${hostname}:${port}/`);
});