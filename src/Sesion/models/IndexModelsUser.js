'use strict'

const config = require('config')
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

const dbUsuarios = []

function addUsuario(usuario) {
    dbUsuarios.push(usuario)
}
function getUsuarios() {
    return query('SELECT * FROM users.tablaUsuarios')
}
function getUsuario(id) {
    return query('SELECT * FROM users.tablaUsuarios WHERE id = ?', [id])
}

module.exports = {
    get: {
        all: getUsuarios(),
        byId: getUsuario()
    },
    add: addUsuario()
}




