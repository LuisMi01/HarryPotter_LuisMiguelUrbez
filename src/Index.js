'use strict'

const mysql = require('mysql');

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
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'LuisMiguel2303',
    database: 'peliculas'
});

connection.connect((error) => {
    if (error) {
        console.error('Error al conectarse a la base de datos: ', error);
        return;
    }

    console.log('Conectado a la base de datos!');
});
app.use('/personajes', personajes)
app.use('/peliculas', pelculas)

app.listen(3000)