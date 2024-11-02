// routes/postsRoutes.js

const express = require('express');
const router = express.Router();
const postsController = require('../controllers/postsController');

// Listar todos os posts
router.get('/posts', postsController.list);

// Obter um post por ID
router.get('/posts/:id', postsController.findById);

// Criar um novo post
router.post('/posts', postsController.create);

// Excluir um post
router.delete('/posts/:id', postsController.delete);

// Atualizar um post
router.put('/posts/:id', postsController.update);

module.exports = router;