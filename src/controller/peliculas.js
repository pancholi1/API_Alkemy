const { Peliculas } = require('../models/index')
const ModelCrud =require('./index') 


const peliculaController = new ModelCrud(Peliculas);


module.exports = peliculaController;