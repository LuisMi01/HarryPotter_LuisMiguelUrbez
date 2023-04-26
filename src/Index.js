'use strict'

const mysql = require('mysql');
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const res = require("express/lib/response");

const personajes = require('./router/IndexVistaPersonaje')
const pelicula = require('./router/IndexVistaPelicula')

app.use(cors())

app.use(bodyParser.urlencoded({ extended: false, limit: '1mb' }))
app.use(bodyParser.json({ limit: '1mb' }))


const pool = mysql.createPool({
    host:"localhost",
    database:"peliculas",
    user:"root",
    password:"LuisMiguel2303",
    connectionLimit: 10
})
app.get('/', function(req, res) {
    res.send('hola mundo')
})
app.get('/personajes', function(req, res) {
    pool.query('SELECT * FROM peliculas.personaje', (err, results) => {
        if(err){
            res.send('Error al obtener datos');
        } else {
            res.json(results);
        }
    });
});
app.get('/peliculas', function(req, res) {
    pool.query('SELECT * FROM peliculas.pelicula', (err, results) => {
        if(err){
            res.send('Error al obtener datos');
        } else {
            res.json(results);
        }
    });
})


app.use('/personajes', personajes)
app.use('/peliculas', pelicula)

app.listen(3003)