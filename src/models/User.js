const {DataTypes} = require('sequelize')

module.exports = function (sequelize){
  return sequelize.define('user',{
   
        name: {
            type: DataTypes.STRING,
            allowNull:false,
            validate: {
                isAlpha:{
                    msg : "El nombre solo puede contener letras"
                },
                len: {
                    args: [2,225],
                    msg: "El nombre minimo tiene que se de dos caracteres"
                }
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull:false,
            validate : {
                len: {
                    args: [6, 255],
                    msg : "La contraserña tiene que tener minimamente 6 caracteres"
                }
            }
        },
        email : {
            type: DataTypes.STRING,
            allowNull:true,
            unique: true,
            validate: {
                isEmail: {
                    msg : "El email tiene que ser un correo valido"
                }
            }
        },
    })


};