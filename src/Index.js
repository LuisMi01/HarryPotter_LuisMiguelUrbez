'use strict'

const mysql = require('mysql2');

//const peliculas = require('./router/VistaPelicula/IndexVistaPelicula')
//const personaje = require('router/VistaPersonaje')


const express = require('express')
const app = express()
const si = require('express-handlebars');
const bodyParser = require('body-parser')
const cors = require('cors')
const res = require("express/lib/response");

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
    pool.query('SELECT * FROM peliculas.pelicula', (err, results) => {
        if(err){
            console.log(err);
            res.send('Error al obtener datos');
        } else {
            res.json(results);
        }
    });
});

//app.use('/personajes', personajes)
//app.use('/peliculas', peliculas)

app.listen(3003)