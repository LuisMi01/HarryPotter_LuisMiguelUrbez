'use strict'

const router = require('express').Router()
const controladorUsuarios = require('../controllers/IndexControllersUsers')
router.get('/', async (req, res, next) => {
    (await controladorUsuarios.get.all)()
        .then(usuarios => res.send(usuarios))
        .catch(err => res.send('ERROR'))
})

router.get('/:id', async (req, res, next) => {
    (await controladorUsuarios.get.byId)(req.params.id)
        .then(usuarios => res.send(usuarios))
        .catch(err => res.send('ERROR'))
})

router.post('/', (req, res, next) => {
    controladorUsuarios.add(req.body)
    res.send('Usuario agregado')
})

module.exports = routerter