const Pelicula = require('../models/Pelicula');
const Genero = require('../models/Genero');
const Actor = require('../models/Actor');
const Director = require('../models/Director');

// Obtener todas las películas
const getPeliculas = async (req, res) => {
    try {
        const peliculas = await Pelicula.findAll();
        res.json(peliculas);
    } catch (error) {
        res.json({ message: error.message })
    }
};

// Obtener películas por género
const getPeliculasPorGenero = async (req, res) => {
    try {
        const { id } = req.params;
        const genero = await Genero.findByPk(id, {
        include: Pelicula
        });
        res.json(genero ? genero.Peliculas : []);
    } catch (error) {
        res.json({ message: error.message })
    }
};

// Obtener películas por actor
const getPeliculasPorActor = async (req, res) => {
    try {
        const { id } = req.params;
        const actor = await Actor.findByPk(id, {
        include: Pelicula
        });
        res.json(actor ? actor.Peliculas : []);
    } catch (error) {
        res.json({ message: error.message })
    }
};

// Obtener películas por director
const getPeliculasPorDirector = async (req, res) => {
    try {
        const { id } = req.params;
        const director = await Director.findByPk(id, {
        include: Pelicula
        });
        res.json(director ? director.Peliculas : []);
    } catch (error) {
        res.json({ message: error.message })
    }
};

module.exports = {
    getPeliculas,
    getPeliculasPorGenero,
    getPeliculasPorActor,
    getPeliculasPorDirector
};
