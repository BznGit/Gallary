
const express = require('express');
const app = express();
const server = require('http').Server(app);

const Helper = require('./controllers/helperController');
const helper = new Helper();
const routes = require('./routes/routes.js');


let MainApp = class {
    start(){
        app.use('/', routes);

        app.set('views', __dirname + '/views'); //указываем расположение папки с шаблонами
        app.engine('mustache', mustacheExpress()); //регистрируем шаблонизатор Mustache в Express
        app.set('view engine', 'mustache');

        server.listen(port, ()=>console.log("FRP server started"));
        app.use(express.static('public')); 
    }
}

module.exports = MainApp;