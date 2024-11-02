// const express = require('express');
// const bodyParser = require('body-parser');
// const userRoutes = require('./routes/userRoutes');
const jwt = require('jsonwebtoken')
const key = 'A29-KP4-9ED989HX9HW8HZVJXV'


const tokenGerado = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub21lIjoiTWFyY2lvIiwibG9naW4iOiJtYXJjaW9AZ3QuY29tLmJyIiwiZXhwIjoxNzMwNTU3NTIwLjY5MSwiaWF0IjoxNzMwNTU3NTAwfQ.XvTmWnOY3Y4bJ3H41yraG61WmxCu6yHoX8jhGQd9Svo'

// VERIFICANDO TOKEN ASSINADO
try {
    const check = jwt.verify(tokenGerado, key);
    console.log(check);
} catch (JsonWebTokenError) {
    console.log("Erro ao verificar token: " + JsonWebTokenError.message);    
}
