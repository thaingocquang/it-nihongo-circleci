const likeModel = require(process.cwd() + '/models/index').Like

const LikeDAO = {}

LikeDAO.index = async (postID) => {
    return likeModel.findAndCountAll({ where: { post_id: postID } })
}

LikeDAO.findByUserIDAndPostID = async (userID, postID) => {
    return likeModel.findOne(
        {
            where: {
                user_id: userID,
                post_id: postID
            }
        }
    )
}

LikeDAO.findByUserIDAndCommentID = async (userID, commentID) => {
    return likeModel.findOne(
        {
            where: {
                user_id: userID,
                comment_id: commentID
            }
        }
    )
}

LikeDAO.findByCommentID = async (comment_id) => {
    return likeModel.findAll({ where: { comment_id: comment_id } })
}

LikeDAO.findByPostID = async (post_id) => {
    return likeModel.findAll({ where: { post_id: post_id } })
}

LikeDAO.create = async (newLike) => {
    return likeModel.create(newLike)
}

LikeDAO.destroy = async (userID, postID) => {
    return likeModel.destroy(
        {
            where: {
                user_id: userID,
                post_id: postID
            }
        }
    )
}

module.exports = LikeDAO
