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
    res.send('Bienvenido al localhost:3003, para moverse entre la api puede urilizar la barra de busqueda. Poniendo /perosnajes, le enseñara todos los personajes disponibles, al igual que con /peliculas. Si especifica un poco mas se encontrara con un solo personaje que quiera obtener al poner en la url /personajes/idPersonaje, al igual que con las peliculas /peliculas/idPelicula')
})
app.get('/personaje', function(req, res) {
    pool.query('SELECT * FROM peliculas.personaje', (err, results) => {
        if(err){
            res.send('Error al obtener datos');
        } else {
            res.json(results);
        }
    });
});
app.get('/personaje/:id', function(req, res) {
    pool.query('SELECT * FROM peliculas.personaje WHERE id = ?', [req.params.id], (err, results) => {
        if(err){
            res.send('Error al obtener datos');
        } else {
            res.json(results);
        }
    });
})

app.get('/pelicula', function(req, res) {
    pool.query('SELECT * FROM peliculas.pelicula', (err, results) => {
        if(err){
            res.send('Error al obtener datos');
        } else {
            res.json(results);
        }
    });
})

app.get('/pelicula/:id', function(req, res) {
    pool.query('SELECT * FROM peliculas.pelicula WHERE id = ?', [req.params.id], (err, results) => {
        if(err){
            res.send('Error al obtener datos');
        } else {
            res.json(results);
        }
    });
})

app.use('/personaje', personajes)
app.use('/pelicula', pelicula)

app.listen(3003)