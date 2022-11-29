const commentModel = require(process.cwd() + '/models/index').Comment

const CommentDAO = {}

CommentDAO.index = async () => {
    return commentModel.findAndCountAll()
}

CommentDAO.findByID = async (id) => {
    return commentModel.findOne({ where: { id: id } })
}

CommentDAO.findByPostIDAndParentID = async (post_id, parent_id)  =>  {
    return commentModel.findAll({ where: { post_id: post_id, parent_id: parent_id } })
}

CommentDAO.findByParentID = async (parent_id)  =>  {
    return commentModel.findAll({ where: { parent_id: parent_id } })
}

CommentDAO.create = async (newComment) => {
    return commentModel.create(newComment)
}

module.exports = CommentDAO
