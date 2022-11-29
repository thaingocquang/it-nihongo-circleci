const path = require('path')

const {
    getPostByPostId,
    updatePostByPostId,
} = require('../../CRUD/post')

async function uploadSingle(request, response) {
    try {
        if (request.file) {
            const postId = request.params.id

            // Check if user exists
            const dbPost = await getPostByPostId(postId)
            if (dbPost) {
                // Update user avatar in database
                const extName = path.extname(request.file.originalname)
                const imageUrl = `public/images/avatars/post/${postId}${extName}`
                const updatePost = {
                    image: imageUrl,
                }
                updatePostByPostId(updatePost, dbPost.image).then(
                    () => {
                        return response.status(200).json({
                            message: "Upload post successfully!",
                            url: imageUrl,
                        })
                    },
                )
            } else {
                return response.status(404).json({
                    message: 'Post not found!',
                })
            }
        } else {
            return response.status(400).json({
                message: 'Image file not found!',
            })
        }
    } catch (error) {
        return response.status(500).json({
            message: 'Something went wrong!',
            error: error,
        })
    }
}

module.exports = uploadSingle
