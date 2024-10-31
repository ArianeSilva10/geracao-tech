const { User, Profile } = require("../models")

exports.list = async (req, res) => {
    try {
        const users = await User.findAll({
            include: [Profile]
        });
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Criar usuário com perfil
exports.create = async (req, res) => {
    try {
        const user = await User.create(req.body, {
            include: [Profile]
        });
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ error: error.message});        
    }
}