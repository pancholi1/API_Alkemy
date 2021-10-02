const {
    Router
} = require('express')
const peliculasController = require('../controller/peliculas')
const {
    Peliculas,
    Personajes,
    Generos
} = require('../models/index')
const {
    Op
} = require("sequelize");
const router = Router()


router.get('/movies', async (req, res) => {
    let {
        name,
        order,
        genre
    } = req.query
    if (name) {
        const movie = await Peliculas.findAll({
            where: {
                titulo: {
                    [Op.startsWith]: name
                }
            }
        }, {
            include: Personajes
        });
        return res.send(movie)
    } else if (order) {
        const movieOrder = await Peliculas.findAll({
            order: [
                ['fechaCreacion', order]
            ]
        });
        return res.send(movieOrder)
    } else if (genre) {

        const filterGenre = await Peliculas.findAll({
            include: {
                model: Generos,
                as: 'Peliculas_Generos',
                where: {
                    idGenero: genre
                }
            }
        })
        return res.send(filterGenre)

    } else {
        const movie = await Peliculas.findAll({
            attributes: ['titulo', 'imagen', 'fechaCreacion']
        })
        return res.send(movie)
    }


})


router.get('/moviesComplete', async (req, res) => {
    const movie = await Peliculas.findAll({
        model: Generos,
        as: "Peliculas_Generos"
    }, {
        include: Personajes
    })
    return res.send(movie)
})

router.put('/movies/:id', async (req, res) => {
    const body = req.body
    const id = req.params.id
    const movie = await Peliculas.update(body, {
        where: {
            movie_id: id
        }
    })
    return res.send(movie);
})



router.delete('/movies/:id' ,async (req, res) => {
  
    const id = req.params.id
    const movie = await Peliculas.destroy({
        where: {
            movie_id: id
        }
    })
    return res.send("se borro");
} )


router.post('/movies/', peliculasController.add)


module.exports = router;