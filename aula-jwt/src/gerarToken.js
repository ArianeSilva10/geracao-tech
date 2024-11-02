const jwt = require('jsonwebtoken')

const dados = {
    nome:  'Marcio',
    login: 'marcio@gt.com.br',
    exp: (Date.now() / 1000) + (20)
}

const key = 'A29-KP4-9ED989HX9HW8HZVJXV'

 // ASSINATURA
const token = jwt.sign(dados, key);

console.log("Token ", token);