const {
    Router
} = require('express')
const {
    Personajes,
    Peliculas
} = require('../models/index')
const actorController = require('../controller/actors')
const { Op } = require("sequelize");
const router = Router()


router.get('/characters', async (req, res) => {
    let {
        name,
        age,
        idMovie
    } = req.query
    if (name) {
        const character = await Personajes.findAll({
            include: Peliculas
        },{
            where: {
                nombre: {[Op.startsWith]:name}
            }
        });
        return res.send(character)
    }
    if (age) {
        const character = await Personajes.findAll({
            include: Peliculas
        }, {
            where: {
                edad: age
            }
        });
        return res.send(character)
    }
    if (idMovie) {
        const character = await Personajes.findAll({
            include: {
                model: Peliculas,
                where: {
                    movie_id: idMovie
                }
            }
        })
        return res.send(character)
    }
    const character = await Personajes.findAll({
        attributes: ['nombre', 'imagen']
    })
    return res.send(character)
})




// router.get('/relacion', async (req, res) => {
//     const characters = await Personajes.findOne({});
//     const movie = await Peliculas.findOne()
//     const relationship = await characters.addPeliculas(movie)
//     return res.send(relationship);
// })


//  router.get('/',actorController.getAll)
//  router.get('/:id',actorController.getById)
router.post('/characters/', actorController.add)
router.put('/characters/:id', actorController.update)
router.delete('/characters/:id', actorController.deletes)


module.exports = router;