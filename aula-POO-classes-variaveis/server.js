const {createServer} = require('node:http')
const rotas = require('./routes/router');

const hostname = 'localhost';
const port = 3000;

const app = createServer((request, response) => {

    const {url, method} = request;

    console.log("URL - ", url);
    console.log("Método/Verbo - ", method);

    if (url === '/') {
        response.writeHead(200, {'Content-type':'text/plain' });
        return response.end('Olá NodeJS, Servidor OK.');
    }
    
    if(!rotas[url] || !rotas[url][method]){
        response.writeHead(404, { 'Content-type': 'text/plain' });
        return response.end('Página não encontrada');         
    }

    const dados = rotas[url][method];
    response.writeHead(200, {'Content-type':'application/json'});
    return response.end(JSON.stringify(dados));        
    

});


app.listen(port, hostname, () => {
    console.log(`Servidor rodando em http://${hostname}:${port}/`);
    
})