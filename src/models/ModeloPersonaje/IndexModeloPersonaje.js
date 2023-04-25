'use strict'

const config = require('config').database
const mysql = require('mysql')

const pool = mysql.createPool({
    ...config,
    connectionLimit: 10
})

function query(sql, params) {
    return new Promise( (resolve, reject) => {
        pool.query(sql, params, (err, res, fields) => {
            if (err) {
                console.log('ERROR DB', err)
                reject(err)
                return
            }
            console.log('Fields', fields)
            console.log('Resultados', res)
            resolve(res)
        })
    } )
}

const dbPersonajes = []

function addPersonaje(personaje) {
    dbPersonajes.push(personaje)
}
function getPersonajes() {
    return query('SELECT * FROM peliculas.personajes')
}
function getPersonaje(id) {
    return query('SELECT * FROM peliculas.personajes WHERE id = ?', [id])
}

module.exports = {
    get: {
        all: getPersonajes(),
        byId: getPersonaje()
    },
    add: addPersonaje()
}
