const express = require('express');
const { register, login } = require('../controllers/userController');
const verifyToken = require('../middlewares/auth');

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/me', verifyToken, (req, res) => {
    res.status(200).send({ message: `User ID: ${req.userID}`});
});

module.exports = router;