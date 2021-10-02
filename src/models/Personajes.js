const {DataTypes} = require('sequelize')

module.exports = function (sequelize){
  return  sequelize.define('personaje',{
       
        imagen: {
            type: DataTypes.STRING,
            allowNull:false
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull:false
        },
        edad : {
            type: DataTypes.INTEGER,
            allowNull:false
        },
        peso : {
            type: DataTypes.INTEGER,
            allowNull:false
        },
        historia : {
            type: DataTypes.TEXT,
            allowNull:false
        },
    })
}