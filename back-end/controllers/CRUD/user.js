const { Op } = require('sequelize')
const models = require(process.cwd() + '/models/index')
const { getCurrentDateTime } = require(process.cwd() + '/helpers/datetime')
const objectCleaner = require(process.cwd() + '/helpers/object-cleaner')

const include = [
    {
        model: models.Role,
        attributes: ['name'],
        required: true,
    },
    {
        model: models.UserInfo,
        attributes: { exclude: ['id', 'user_id', 'createdAt'] },
        required: true,
    },
]

async function index(params) {

    return models.User.findAndCountAll({
        include: include,
        order: [
            ['id', 'DESC'],
            ['name', 'ASC'],
        ],
    })
}

async function showById(id) {
    return models.User.findByPk(id, { include: include })
}

async function showByEmail(email) {
    return models.User.findOne({ include: include, where: { email: email } })
}

async function create(newUser) {
    return models.User.create(newUser)
}

async function update(updateUser, id) {
    return models.User.update(updateUser, { where: { id: id } })
}

async function destroy(id) {
    const now = getCurrentDateTime()

    // Update deletedAt field of user
    const updateUser = {
        deletedAt: now,
    }
    await update(updateUser, id)
}

async function checkValid(id) {
    const dbUser = await models.User.findOne({ where: { id: id } })
    return {
        is_valid: dbUser.is_verified && dbUser.deletedAt == null,
        message: !dbUser.is_verified
            ? 'This email is not verified yet!'
            : 'This user was deleted!',
    }
}

module.exports = {
    getListUsers: index,
    getUserById: showById,
    getUserByEmail: showByEmail,
    addNewUser: create,
    updateUserById: update,
    softDeleteUserById: destroy,
    checkValidAccount: checkValid,
}
