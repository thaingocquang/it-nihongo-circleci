const models = require('../../models/index')
const REVIEWER = 3
const STORE_OWNER = 3
const ADMIN = 3
const index = async (req, res) => {
    try {
        const posts = await models.Post.findAll()
        return res.status(200).json(posts)
    } catch (error) {
        return res.status(500).json({
            message: 'Something went wrong!',
            error: error,
        })
    }
};

const showById = async (req, res) => {
    try {
        const post = await models.Post.findByPk(req.params.id)
        return res.status(200).json(post)
    } catch (error) {
        return res.status(500).json({
            message: 'Something went wrong!',
            error: error,
        })
    }
};

const showByUserId = async (req, res) => {
    try {
        const post = await models.Post.findAll({ where: { user_id: req.body.user_id } })
        return res.status(200).json(post)
    } catch (error) {
        return res.status(500).json({
            message: 'Something went wrong!',
            error: error,
        })
    }
};

const create = async (req, res) => {
    try {
        const newPost = {
            user_id: req.body.user_id,
            store_id: req.body.store_id,
            title: req.body.title,
            content: req.body.content,
        }
        await models.Post.create(newPost)
        return res.status(201).json({
            message: 'Create post successfully!',
        })
    } catch (err) {
        return res.status(500).json({
            message: 'Something went wrong!',
            error: error,
        })
    }
};

const update = async (req, res) => {
    try {
        const post = await models.Post.findByPk(req.params.id);
        if (!post) {
            return res.status(404).json({
                message: 'Post not found!',
            })
        }
        
        if (req.user.role_id !== ADMIN && req.user.user_id !== req.body.user_id){
            return res.status(404).json({
                message: 'Can not update this post!',
            })
        }
        const updatePost = {
            title: req.body.title,
            content: req.body.content,
        }
        models.Post.update(updatePost, { where: { id: req.params.id } })
        return res.status(201).json({
            message: 'Update post successfully!',
        })
    } catch (err) {
        return res.status(500).json({
            message: 'Something went wrong !',
            error: error,
        })
    }
};

const destroy = async (req, res) => {
    try {
        const post = await models.Post.findByPk(req.params.id);
        if (!post) {
            return res.status(404).json({
                message: 'Post not found!',
            })
        }
        if (req.user.role_id !== ADMIN && req.user.user_id !== req.body.user_id){
            return res.status(404).json({
                message: 'Can not delete this post!',
            })
        }
        models.Post.destroy({ where: { id: req.params.id } })
        return res.status(200).json({
            message: 'Delete post successfully!',
        })
    } catch (err) {
        return res.status(500).json({
            message: 'Something went wrong !',
            error: error,
        })
    }
};
module.exports = {
    getAllPosts: index,
    getPostById: showById,
    getPostByUserId: showByUserId,
    createPost: create,
    updatePostById: update,
    deletePostById: destroy,
}
