const http = require('http');
const { listarProdutos, adicionarProduto, removerProduto } = require('./routes/produtos');

const server = http.createServer((req, res) => {
    const {url, method} = req;

    if (url === '/' && method === 'GET') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Servidor Node.js');
    }
    else if(url === '/produtos' && method === 'GET'){
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(listarProdutos());        
    }
    else if(url === '/produtos/adicionar'){
        const novoProduto = {id: 3, nome: 'Monitor', valor: 800};
        res.statusCode = 201;
        res.setHeader('Content-Type', 'application/json');
        res.end(adicionarProduto(novoProduto));
    }
    else if(url === '/produtos/remover'){
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(removerProduto());
    }
    else{
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Página não encontrada');         
    }

});

const hostname = '127.0.0.1';
const port = 3000;

server.listen(port, hostname, () => {
    console.log(`Servidor rodando em http://${hostname}:${port}/`);
    
})