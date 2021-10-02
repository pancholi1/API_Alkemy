const {Router} = require('express')
const router = Router()



const ActorsRoutes = require('./personajes')
const MoviesRoutes = require('./movies')
const Auth = require('./loging')
const auth = require('../middlewares/auth')



router.use('/auth' , Auth)
router.use('/', auth,ActorsRoutes )
router.use('/',auth, MoviesRoutes )



module.exports = router;