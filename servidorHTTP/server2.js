const http = require('http');

const url = require('url');


const server = http.createServer((req, res) => {
    const parseURL = url.parse(req.url,true);
    const query = parseURL.query;

    res.statusCode = 200; //Código de status HTTP 200 (OK)
    res.setHeader('Content-Type', 'text/html'); // Definindo o tipo de conteúdo como HTML
    res.end(`        
        <!DOCTYPE html>
        <html lang="pt-BR">
            <head>
                <meta charset="UTF-8">
                <title>Servidor Node.js</title>
            </head>
            <body>
                <h1>Olá, ${query.nome || 'mundo'}!</h1>
                <p>Este é um servidor Node.js</p>
            </body>
        </html>
    `);
});

const hostname = '127.0.0.1';
const port = 3000;

server.listen(port, hostname, () => {
    console.log(`Servidor rodando em http://${hostname}:${port}/`);
});