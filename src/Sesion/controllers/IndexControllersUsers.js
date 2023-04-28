'use strict'

const modeloUsuario = require('../models/IndexModelsUser')

module.exports = {
    get: {
        all: modeloUsuario.get.all,
        byId: modeloUsuario.get.byId
    },
    add: modeloUsuario.add
}