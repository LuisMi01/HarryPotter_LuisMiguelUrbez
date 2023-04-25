'use strict'

const personajes = require('./router/VistaPersonaje/IndexVistaPersonaje')
const pelculas = require('./router/VistaPelicula/IndexVistaPelicula')

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')

app.use(cors())

app.use(bodyParser.urlencoded({ extended: false, limit: '1mb' }))
app.use(bodyParser.json({ limit: '1mb' }))

app.get('/', (req, res, next) => {
    res.send("HOLA")
})

app.use('/personajes', personajes)
app.use('/peliculas', peliculas)

app.listen(3033)