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

const dbPeliculas = []

function addPelicula(pelicula) {
    dbPeliculas.push(pelicula)
}
function getPeliculas() {
    return query('SELECT * FROM peliculas.peliculas')
}
function getPelicula(id) {
    return query('SELECT * FROM peliculas.peliculas WHERE id = ?', [id])
}

module.exports = {
    get: {
        all: getPeliculas(),
        byId: getPelicula()
    },
    add: addPelicula()
}
