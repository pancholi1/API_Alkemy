const {
    Router
} = require('express')
const router = Router()


const AuthController = require('../controller/AuthController')


router.post('/login', AuthController.singIn)
router.post('/register', AuthController.singUp)

module.exports = router;