'use strict'

const router = require('express').Router()
const controladorPersonajes = require('../controllers/ControladorPersonajes/IndexControladorPersonajes.js')
router.get('/', async (req, res, next) => {
    (await controladorPersonajes.get.all)()
        .then(personajes => res.send(personajes))
        .catch(err => res.send('ERROR'))
})

router.get('/:id', async (req, res, next) => {
    (await controladorPersonajes.get.byId) (req.params.id)
        .then(peliculas => res.send(peliculas))
        .catch(err => res.send('ERROR'))
})



router.post('/', (req, res, next) => {
    controladorPersonajes.add(req.body)
    res.send('Pelicula agregada')
})

module.exports = router