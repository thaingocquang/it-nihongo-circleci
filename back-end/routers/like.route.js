const express = require('express')
const likeApiController = require('../controllers/api/like.controller')
const checkAuth = require("../middleware/check-auth.js");

const router = express.Router();

router.get('/post/:id', likeApiController.getLikesByPostID)
router.get('/comment/:id', likeApiController.getLikesByCommentID)
router.post('/post/:id', checkAuth, likeApiController.handleLikePost)
router.post('/comment/:id', checkAuth, likeApiController.handleLikeComment)

module.exports = router
