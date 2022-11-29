const postModel = require(process.cwd() + '/models/index').Post

async function index() {
    return postModel.findAndCountAll()
}

async function showByPostId(postId) {
    return postModel.findOne({ where: { id: postId } })
}

async function create(newPost) {
    return postModel.create(newPost)
}

async function update(updatePost, postId) {
    return postModel.update(updatePost, { where: { id: postId } })
}

async function destroy(postId) {
    return postModel.destroy({ where: { id: postId } })
}

module.exports = {
    index: index,
    getPostByPostId: showByPostId,
    addNewPost: create,
    updatePostByPostId: update,
    deletePostByPostId: destroy,
}
