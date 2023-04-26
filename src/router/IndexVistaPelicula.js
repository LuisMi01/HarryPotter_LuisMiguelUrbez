'use strict'

const router = require('express').Router()
const controladorPeliculas = require('../controllers/ControladorPelicula/IndexControladorPelicula.js')
router.get('/', async (req, res, next) => {
    (await controladorPeliculas.get.all)()
        .then(peliculas => res.send(peliculas))
        .catch(err => res.send('ERROR'))
})

router.get('/:id', async (req, res, next) => {
    (await controladorPeliculas.get.byId)(req.params.id)
        .then(peliculas => res.send(peliculas))
        .catch(err => res.send('ERROR'))
})

router.post('/', (req, res, next) => {
    controladorPeliculas.add(req.body)
    res.send('Pelicula agregada')
})

module.exports = router