const Tag = require('../models/Tag');

async function create(req, res) {
    try {
        const { name } = req.body;
        const newTag = await Tag.create({ name });

        return res.status(201).json({
            message: 'Tag criada com sucesso',
            tag: newTag
        });
    } catch (error) {
        console.error('Erro ao criar a tag: ', error);
        return res.status(500).json({
            message: 'Erro ao criar a tag',
            error: error.message
        });
    }
}

module.exports = {
    create
};