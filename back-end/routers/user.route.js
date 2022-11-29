const express = require('express')
const userApiController = require('../controllers/api/user.controller')
const checkAuth = require("../middleware/check-auth.js");
const checkRoleMiddleware = require('../middleware/check-role')
const checkOwnerMiddleware = require('../middleware/check-owner')

const router = express.Router();

router.get(
    '/',
    checkAuth,
    checkRoleMiddleware.checkRoleAdmin,
    userApiController.index,
)

router.get(
    '/:id',
    checkAuth,
    checkOwnerMiddleware.checkAccountOwner,
    userApiController.showById,
)

router.post(
    '/',
    checkAuth,
    checkRoleMiddleware.checkRoleAdmin,
    userApiController.create,
)

router.patch(
    '/:id',
    checkAuth,
    checkOwnerMiddleware.checkAccountOwner,
    userApiController.updateById,
)

router.delete(
    '/:id',
    checkAuth,
    checkOwnerMiddleware.checkAccountOwner,
    userApiController.softDeleteById,
)

module.exports = router
