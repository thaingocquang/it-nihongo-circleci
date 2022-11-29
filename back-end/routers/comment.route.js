const express = require('express')
const commentApiController = require('../controllers/api/comment.controller')
const checkAuth = require("../middleware/check-auth.js");

const router = express.Router();

router.post('/', checkAuth, commentApiController.createComment)
router.get('/post/:id', commentApiController.getListCommentsByPostID)
router.get('/parent/:parent_id', commentApiController.getCommentsByParentID)

module.exports = router
