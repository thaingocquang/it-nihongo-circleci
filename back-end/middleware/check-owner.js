
const ADMIN_ROLE = 3

async function checkAccountOwner(request, response, next) {
    try {
        const userId = request.params.id
        const requestRole = request.user.role_id
        const requestUserId = request.user.user_id
        
        // Check if request user is admin or not
        if (requestRole != ADMIN_ROLE) {
            // If API don't have id then this API is for admin only
            if (!userId) {
                return response.status(400).json({
                    message: 'Invalid role!',
                })
            }

            if (requestUserId != userId) {
                return response.status(400).json({
                    message: 'Access denied for this role!',
                })
            } else next()
        } else next()
    } catch (error) {
        return response.status(401).json({
            message: 'Something went wrong!',
            error: error,
        })
    }
}



module.exports = {
    checkAccountOwner: checkAccountOwner,
}
