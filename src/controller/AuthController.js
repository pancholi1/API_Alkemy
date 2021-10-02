const {
    User
} = require('../models/index.js')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth');

module.exports = {
   async singIn(req, res) {
        let { email, password } = req.body;
      const usuario = await  User.findOne({
            where : {
                email: email
            }
        })
        if(!usuario) {
            res.status(404).json({msg: "Usuario con este correo no encontrado"})
        } else {
           if( bcrypt.compareSync(password, usuario.password)) {
               //devolvemos token
               let token = jwt.sign({ User: usuario  }, authConfig.secret, {
                    expiresIn: authConfig.expires })

                    return res.json({ user : usuario, token: token})

           } else {
               //no autoriza 
               res.status(404).json({msg: "Contraseña incorrecta"})
           }
        }

    },


    async singUp(req, res) {
        //encriptamos la contraseña
        let password = bcrypt.hashSync(req.body.password, +authConfig.rounds);
        const usuario = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: password
        })

        //creamos el token
        let token = jwt.sign({
            User: usuario
        }, authConfig.secret, {
            expiresIn: authConfig.expires
        })

        res.json({
            user: usuario,
            token: token
        })
    }
}