module.exports = function(app){
    let usuario = app.controllers.usuarios;
    app.route('/usuarios').get(usuario.index);
    app.route('/usuarios/add').get(usuario.add);
}