const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth')

module.exports = (req, res, next) => {
    
    console.log(req.headers)
    //comprobar qyue existe el token

    if(!req.headers.authorization){
        res.status(404).json({msg: "no Autorizado"})
    } else {
        //comprobar la valides de este token
        let token = req.headers.authorization.split(" ")[1]
        jwt.verify(token, authConfig.secret, (err , decaded) => {
            if(err) {
                res.status(500).json({ msg : "Ha ocurrido un problema"})
            } else {
                req.user = decaded;
                next();
            }
        })

    
    }
}