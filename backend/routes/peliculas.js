const express = require('express');
const router = express.Router();
const { getPeliculas, getPeliculasPorGenero, getPeliculasPorActor, getPeliculasPorDirector } = require('../controllers/peliculasController');

router.get('/', getPeliculas);
router.get('/genero/:id', getPeliculasPorGenero);
router.get('/actor/:id', getPeliculasPorActor);
router.get('/director/:id', getPeliculasPorDirector);

module.exports = router;
