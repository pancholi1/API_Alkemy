const {
  Sequelize
} = require('sequelize')

const {
  dbUser,
  dbName,
  dbHost,
  dbPassword
} = require('../config/index')



const CreacionPersonajes = require('./Personajes')
const CreacionGeneros = require('./Generos')
const CreacionPeliculas = require('./Peliculas')
const CreacionUsuario = require('./User')


const sequelize = new Sequelize('pelis', 'postgres', 'olivero', {
  host: 'localhost',
  dialect: 'postgres',
  logging: false, // <--- Disable logging
});


const Personajes = CreacionPersonajes(sequelize);
const Generos = CreacionGeneros(sequelize);
const Peliculas = CreacionPeliculas(sequelize);
const User = CreacionUsuario(sequelize);


//relationship Movies Actors
Peliculas.belongsToMany(Personajes, { through: 'Personajes_Peliculas' });
 Personajes.belongsToMany(Peliculas, { through: 'Personajes_Peliculas' });


// //relationship Movies generos
Generos.hasMany(Peliculas, { as: "Generos_Peliculas", foreignKey: "pelis_id" });
Peliculas.belongsTo(Generos, { as: "Peliculas_Generos" });



module.exports = {
  conn: sequelize,
  Personajes,
  Generos,
  Peliculas,
  User,
 
}