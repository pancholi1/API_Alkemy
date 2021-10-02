const {DataTypes} = require('sequelize')

module.exports = function (sequelize){
  return  sequelize.define('pelicula',{
        movie_id: {
            type:DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        imagen: {
            type: DataTypes.STRING,
            allowNull:true
        },
        titulo : {
            type: DataTypes.STRING,
            allowNull:true
        },
        
        fechaCreacion: {
            type: DataTypes.DATE,
            allowNull:true
        },
        calificacion: {
            type: DataTypes.INTEGER,
            allowNull:true
        }
    })
}