const Pelicula = require('./Pelicula');
const Genero = require('./Genero');
const Actor = require('./Actor');
const Director = require('./Director');
const Comentario = require('./Comentario');
const comentarioXusuarioXpelicula = require('./comentarioXusuarioXpelicula');
const Usuario = require('./Usuario');
const Rol_Usuario = require('./Rol_Usuario')

Usuario.hasMany(comentarioXusuarioXpelicula, { foreignKey: 'id_usuario' });
Pelicula.hasMany(comentarioXusuarioXpelicula, { foreignKey: 'id_pelicula' });
Comentario.hasMany(comentarioXusuarioXpelicula, { foreignKey: 'id_comentario' });

Usuario.belongsToMany(Pelicula, { through: "peliculaXusuario"});
Pelicula.belongsToMany(Usuario, { through: "peliculaXusuario"});

Rol_Usuario.hasMany(Usuario, { foreignKey: 'id_rol' });
Usuario.belongsTo(Rol_Usuario, { foreignKey: 'id_rol' });

Pelicula.belongsToMany(Genero, { through: "generoXpelicula"});
Genero.belongsToMany(Pelicula, {through: "generoXpelicula" });

Pelicula.belongsToMany(Actor, { through: "actorXpelicula"});
Actor.belongsToMany(Pelicula, {through: "actorXpelicula" });

Pelicula.belongsToMany(Director, { through: "directorXpelicula"});
Director.belongsToMany(Pelicula, {through: "directorXpelicula" });