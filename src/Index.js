'use strict'

const mysql = require('mysql2');

//const peliculas = require('./router/VistaPelicula/IndexVistaPelicula')
//const personaje = require('router/VistaPersonaje')


const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const res = require("express/lib/response");

app.use(cors())

app.use(bodyParser.urlencoded({ extended: false, limit: '1mb' }))
app.use(bodyParser.json({ limit: '1mb' }))


app.get('/', (req, res, next) => {
    res.send("HOLA")
})
const pool = mysql.createPool({
    host:"localhost",
    database:"peliculas",
    user:"root",
    password:"LuisMiguel2303",
    connectionLimit: 10
})

pool.query('SELECT * FROM peliculas.pelicula', (err, res, fields) => {
    if(err){
        console.log(err)
        return
    }
    console.log('Fields', fields)
    console.log('Resultados', res)

})
pool.query('SELECT * FROM peliculas.personaje', (err, res, fields) => {
    if(err){
        console.log(err)
        return
    }
    console.log('Fields', fields)
    console.log('Resultados', res)

})

//app.use('/personajes', personajes)
//app.use('/peliculas', peliculas)

app.listen(3003)