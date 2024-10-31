const { Profile, User } = require("../models")

// Listar perfis com usuários
exports.list = async (req, res) => {
    try {
        const profiles = await Profile.findAll({
            include: [User]
        });
        res.json(profiles);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
};