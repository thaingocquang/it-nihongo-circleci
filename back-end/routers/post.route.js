const express = require('express')
const router = express.Router();
const checkAuth = require("../middleware/check-auth.js");

const {
    getAllPosts,
    getPostById,
    getPostByUserId,
    createPost,
    updatePostById,
    deletePostById,
} = require("../controllers/api/post.controller.js");


router.get('/', getAllPosts)
router.get('/user', getPostByUserId)
router.get('/:id', getPostById)
router.post('/', checkAuth, createPost)
router.put('/:id', checkAuth, updatePostById)
router.delete('/:id', checkAuth, deletePostById)

module.exports = router;