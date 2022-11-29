const storeModel = require(process.cwd() + '/models/index').Store

async function index() {
    return storeModel.findAndCountAll()
}

async function findByID(id) {
    return storeModel.findOne({ where: { id: id } })
}

async function create(newStore) {
    return storeModel.create(newStore)
}

async function update(updateStore, id) {
    return storeModel.update(updateStore, { where: { id: id } })
}

async function destroy(userId) {
    return storeModel.destroy({ where: { user_id: userId } })
}

module.exports = {
    getListStores: index,
    getStoreByID: findByID,
    addNewStore: create,
    updateStoreByUserID: update,
    deleteUserInfoByUserId: destroy,
}
