// routes/postRoutes.js

const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');

router.get('/posts', postController.list);
router.post('/posts', postController.create);

module.exports = router;