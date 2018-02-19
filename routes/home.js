module.exports = function(app){
    let home = app.controllers.home;
    app.route('/').get(home.index);
}