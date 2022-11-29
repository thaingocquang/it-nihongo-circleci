const express = require('express')
const checkAuth = require("../middleware/check-auth.js")
const checkOwnerMiddleware = require('../middleware/check-owner')

const uploadHelpers = require('../helpers/uploaders')
const uploadControllers = require('../controllers/upload')

const router = express.Router()

router.post(
    '/avatar/user/:id',
    checkAuth,
    checkOwnerMiddleware.checkAccountOwner,
    uploadHelpers.userAvatarUploader,
    uploadControllers.userAvatarController,
)

router.post(
    '/post/image/:id',
    checkAuth,
    checkOwnerMiddleware.checkAccountOwner,
    uploadControllers.postImageController,
)


module.exports = router
