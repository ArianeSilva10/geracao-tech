const express = require('express');
const UsuariosRotas = require('./UsuariosRotas');
const PostsRotas = require('./PostRotas');
const jwt = require('jsonwebtoken')
require('dotenv').config()

const RotasPrivadas = express.Router();


//Middleware
RotasPrivadas.use((request, response, next) => {
    return next()
    let auth = false

    if(request.headers.token){
        const { token } = request.headers;

        try{    
            jwt.verify(token,  process.env.APP_KEY_TOKEN)
            auth = true;
        }catch(e){
            return response.status(403).send(e);
        }

    }
    
    if(auth === false){
        return response.status(403).send("Não Autorizado");        
    }
    next();
})

RotasPrivadas.use(UsuariosRotas);
RotasPrivadas.use(PostsRotas);

module.exports = RotasPrivadas;