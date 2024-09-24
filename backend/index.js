require('./models/Relaciones');
const express = require("express")
const sequelize = require('./database/db');
const Pelicula = require('./models/Pelicula');
const Genero = require('./models/Genero');
const Actor = require('./models/Actor');
const Director = require('./models/Director');
const Comentario = require('./models/Comentario');
const comentarioXusuarioXpelicula = require('./models/comentarioXusuarioXpelicula');
const Usuario = require('./models/Usuario');
const Rol_Usuario = require('./models/Rol_Usuario')

const app = express()
app.use(express.json())

sequelize.sync()
    .then(() => console.log("La base de datos y las tablas han sido sincronizadas"))
    .catch(err => console.error("Error al sincronizar la base de datos", err))

const PORT = 3000 || 3001;
app.listen(PORT, () => {
    console.log("Servidor corriendo en el puerto ${PORT}")
})

