const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// Simulação de um banco de dados de usuários
let users = [];

const register = (req, res) => {
    const { username, password } = req.body;
    const hashedPassword = bcrypt.hashSync(password, 8);
    users.push({ username, password: hashedPassword });
    res.status(201).send({ message: 'Usuário criado com sucesso!' });
};

const login = (req, res) => {
    const { username, password }  = req.body;
    const user = users.find(u => u.username === username);
    if (!user || !bcrypt.compareSync(password, user.password)) {
        return res.status(401).send({ message: 'Credenciais inválidas!' });
    }
    const token = jwt.sign({ username }, 'segredo', {
        expiresIn: '1h'
    });
    res.status(200).send({ auth: true, token });
};

module.exports = {register, login};