const hashHelper = require('../../helpers/password-encrypter/hash_helper')
const jwt = require('jsonwebtoken')
const models = require('../../models/index')

const { getUserById } = require('../CRUD/user')

async function login(request, response) {
    try {
        
        const dbUser = await models.User.findOne({ where: { email: request.body.email } })
        if (dbUser) {
            if (dbUser.deletedAt != null) {
                return response.status(400).json({
                    message: 'This user was deleted!',
                })
            }
            if (!hashHelper.compare(request.body.password, dbUser.password)) {
                return response.status(400).json({
                    message: 'Wrong password!',
                })
            }
            const user = await getUserById(dbUser.id)
            jwt.sign(
                {
                    user_id: dbUser.id,
                    email: dbUser.email,
                    role_id: dbUser.role_id,
                },
                process.env.JWT_SECRET,
                function (err, token) {
                    if (err) {
                        return response.status(500).json({
                            message: err,
                        })
                    }
                    return response.status(200).json({
                        message: 'Login successfully!',
                        token: token,
                        user: user,
                    })
                },
            )
        } else {
            return response.status(404).json({
                message: 'Email not found!',
            })
        }
    } catch (error) {
        console.log(error);
        return response.status(500).json({
            message: 'Something went wrong!',
            error: error,
        })
    }
}

module.exports = login
