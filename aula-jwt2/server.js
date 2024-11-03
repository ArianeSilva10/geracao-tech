const express = require('express');
const jwt = require('jsonwebtoken')
require('dotenv').config()
const app = express();

app.get('/', (request, response) => {
    return response.status(200).send("Ola Express + JWT")
})

app.get('/token', (request, response) => {

    const time = Date.now();
    let segundosAteAgora = time / 1000;
    segundosAteAgora = Math.floor(segundosAteAgora);
    segundosDaquiUmaHora = segundosAteAgora + (60 * 60); // 3600 segundos = 1 hora

    const dados = {
        id: 1, nome: 'Max', login: 'max', exp: segundosDaquiUmaHora
    } 
    const token = jwt.sign(dados, process.env.APP_KEY)
    return response.json({ token: token})
})

app.get('/validar-token', (request, response) => {
    const token = request.headers.token;


    try {
        const validacao = jwt.verify(token, process.env.APP_KEY);
        return response.status(200).json({ mensagem: 'Token válido'})
    } catch (JsonWebTokenError) {
        return response.status(403).json({ mensagem: 'Token invalido'})
    }
})

app.listen(3000, 'localhost', () => {
    console.log("servidor executando na http://localhost:3000");     
})