const express = require('express')
const morgan = require('morgan')
const {PORT} = require('./src/config/index')
const errorHandler = require('./src/middlewares/errorHandler')
const setHeaders = require('./src/middlewares/setHeaders')
const app = express()
const routes = require('./src/routes/index')
const {conn} = require ('./src/models') 


app.use(express.urlencoded({extended: true, limit: "50mb"})) //middleware parsear json
app.use(express.json({limit: "50mb"}))
app.use(morgan('dev'))
app.use(setHeaders)
app.use(errorHandler)

app.use('/',routes)


conn.sync({alter:true})
.then( () => {
    console.log("Base de datos conectada!")
    app.listen(PORT, () => {
        console.log('el servidor esta escuchando en el puerto 3000')
    })
})


