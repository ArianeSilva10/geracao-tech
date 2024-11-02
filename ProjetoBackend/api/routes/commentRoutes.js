// routes/commentsRoutes.js

const express = require('express');
const router = express.Router();
const commentsController = require('../controllers/commentsController');

// Rotas para listar e criar comentários
router.get('/comments', commentsController.list);
router.post('/comments', commentsController.create);

module.exports = router;