const express = require('express')
const storeApiController = require('../controllers/api/store.controller')
const router = express.Router();

router.get('/', storeApiController.getAllStores,)
router.post('/', storeApiController.create)
router.put('/:id', storeApiController.updateById)

module.exports = router