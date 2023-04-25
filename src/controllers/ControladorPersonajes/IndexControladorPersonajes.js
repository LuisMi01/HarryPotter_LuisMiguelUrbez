'use strict'

const modeloPersonaje = require('../../models/ModeloPersonaje/IndexModeloPersonaje.js')

module.exports = {
    get: {
        all: modeloPersonaje.get.all,
        byId: modeloPersonaje.get.byId
    },
    add: modeloPersonaje.add
}