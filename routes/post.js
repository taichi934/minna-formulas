const express = require('express');
const router = express.Router();
const postController = require('../controllers/post');

// 記述例
// router.get('<URL>', postController.関数);

router.get('/', postController.getAllPosts);

module.exports = router;
