const {getRoleById} = require("../CRUD/role");
const {addNewStore, getListStores, getStoreByID, updateStoreByUserID} = require('../CRUD/store')
const role = require('./../../constant/roles')

const index = async (request, response) => {
    try {
        const queryResult = await getListStores()
        return response.status(200).json(queryResult)
    } catch (error) {
        return response.status(500).json({
            message: 'Something went wrong!',
            error: error,
        })
    }
}

async function create(request, response) {
    try {
        // check role is existed in db
        const dbRole = await getRoleById(request.body.role_id)
        if (!dbRole) {
            return response.status(409).json({
                message: 'Invalid role!',
            })
        }

        // check role is STORE_OWNER or ADMIN
        if (request.body.role_id === role.REVIEWER) {
            return response.status(409).json({
                message: 'You dont have permission to create store!',
            })
        }

        // create new store
        const newStore = {
            name: request.body.name,
            address: request.body.address,
            user_id: request.body.user_id,
        }
        await addNewStore(newStore)

        return response.status(201).json({
            message: 'Create store successfully!',
        })
    } catch (error) {
        return response.status(500).json({
            message: 'Something went wrong!',
            error: error,
        })
    }
}

async function updateById(request, response) {
    try {
        const storeID = request.params.id

        // check if store exists
        const dbStore = await getStoreByID(storeID)
        if (!dbStore) {
            return response.status(404).json({
                message: 'store not found!',
            })
        }

        // check role is STORE_OWNER or ADMIN
        if (request.body.role_id === role.REVIEWER) {
            return response.status(409).json({
                message: 'You dont have permission to update store!',
            })
        }

        // update
        const updateStore = {
            name: request.body.name,
            address: request.body.address,
        }
        await updateStoreByUserID(updateStore)

        return response.status(200).json({
            message: 'Update store information successfully!',
        })
    } catch (error) {
        return response.status(500).json({
            message: 'Something went wrong!',
            error: error.toString(),
        })
    }
}

module.exports = {
    getAllStores: index,
    create: create,
    updateById: updateById
}
