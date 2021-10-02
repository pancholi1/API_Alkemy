const { Personajes } = require('../models/index')
const ModelCrud =require('./index') 


const actorController = new ModelCrud(Personajes);


module.exports = actorController;