const express = require('express');
const UsuariosRotas = require('./routes/UsuariosRotas');
const PostsRotas = require('./routes/PostRotas');

const host = "localhost"
const port = 3000;

const app = express()
app.use(express.json())

app.get('/',( request, response) => {
    return response.send("Olá, eu sou Backend com NodeJS + Express")
});

app.use(UsuariosRotas);
app.use(PostsRotas)

app.get('/teste/:codigo', (request, response) => {
    //Querys
    const query = request.query;
    let dados = "Query: " + query.nome + " - " + query.sobrenome;

    // Params 
    const params = request.params;
    dados += "<br > Params: " + params.codigo

    //Body
    const body = request.body;
    dados += "<br > Body: " + JSON.stringify(body);
    
    return response.send(dados);
})

app.listen(port, host, () => {
    console.log(`Servidor executando em http://${host}:${port}`);    
});