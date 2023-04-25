'use strict'

const modeloPelicula = require('../../models/ModeloPelicula/IndexModeloPelicula.js')

module.exports = {
    get: {
        all: modeloPelicula.get.all,
        byId: modeloPelicula.get.byId
    },
    add: modeloPelicula.add
}