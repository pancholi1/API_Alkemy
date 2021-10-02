const {DataTypes} = require('sequelize')
const { uuid } = require('uuidv4');

module.exports = function (sequelize){
  return  sequelize.define('genero',{
        idGenero: {
            type:DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre : {
            type: DataTypes.STRING,
            allowNull:false
        },
        imagen: {
            type: DataTypes.STRING,
            allowNull:false
        },
        
    })
}