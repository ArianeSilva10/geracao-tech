const express = require('express');
const router = express.Router();
const userController = require('../controllers/UsuariosController');

const userController = new userController();

router.get('/users', userController.list);
router.post('/users', userController.create);

module.exports = router;