module.exports = function(app){
    let UsuarioController = {
        index: function(req, res){
            res.render('usuarios/index');
        },
        add: function(req,res){
            res.render('usuarios/add');
        }
    }
    return UsuarioController;
}