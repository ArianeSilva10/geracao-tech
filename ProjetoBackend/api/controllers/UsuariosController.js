const MD5 = require('crypto-js/md5')
const { User, Profile } = require("../models")

class UsuariosController{

    
    async list(req, res){
        const users = await User.findAll({
            include: [Profile]
        });
        return res.json(users);
    };
    
    // Criar usuário com perfil
    create(req, res){
        const body = req.body;
        const password = MD5(body.password).toString()
        body.password = password;
        User.create(body, {include: Profile});
        return res.status(201).json({
            message: "Usuario cadastrado com sucesso"
        });
    }
}

module.exports = UsuariosController;