const express = require('express')
const consign = require('consign')
const db = require('./config/db')


//Iniciando o app
const app = express()

app.db = db

consign()
    .include('./config/passport.js')
    .then('./config/middlewares.js')
    .then('./api/validation.js')
    .then('./api')
    .then('./auth')
    .then('./config/routes.js')
    .into(app)



app.listen(3333, () => {
    console.log('Executando Backend...')
})