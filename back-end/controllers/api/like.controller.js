const LikeDAO = require("../CRUD/like");

const handleLikePost = async (request, response) => {
    try {
        let isLiked = await LikeDAO.findByUserIDAndPostID(request.user.user_id, request.params.id)
        if (!isLiked) {
            let newLike = {
                user_id: request.user.user_id,
                post_id: request.params.id
            }
            await LikeDAO.create(newLike)
            return response.status(201).json({message: "liked"})
        } else {
            await LikeDAO.destroy(request.user.user_id, request.params.id)
            return response.status(201).json({message: "unliked"})
        }

    } catch (err) {
        return response.status(500).json({
            message: 'Something went wrong!',
            error: err.toString(),
        })
    }
}

const handleLikeComment = async (request, response) => {
    try {
        let isLiked = await LikeDAO.findByUserIDAndCommentID(request.user.user_id, request.params.id)
        if (!isLiked) {
            let newLike = {
                user_id: request.user.user_id,
                comment_id: request.params.id
            }
            await LikeDAO.create(newLike)
            return response.status(201).json({message: "liked"})
        } else {
            await LikeDAO.destroy(request.user.user_id, request.params.id)
            return response.status(201).json({message: "unliked"})
        }

    } catch (err) {
        return response.status(500).json({
            message: 'Something went wrong!',
            error: err.toString(),
        })
    }
}

const getLikesByPostID = async (request, response) => {
    try {
        const likes = await LikeDAO.findByPostID(request.params.id)
        return response.status(200).json(likes)
    } catch (error) {
        return response.status(500).json({
            message: 'Something went wrong!',
            error: error,
        })
    }
}

const getLikesByCommentID = async (request, response) => {
    try {
        const likes = await LikeDAO.findByCommentID(request.params.id)
        return response.status(200).json(likes)
    } catch (error) {
        return response.status(500).json({
            message: 'Something went wrong!',
            error: error,
        })
    }
}

module.exports = {
    handleLikePost: handleLikePost,
    getLikesByPostID: getLikesByPostID,
    handleLikeComment: handleLikeComment,
    getLikesByCommentID: getLikesByCommentID
}