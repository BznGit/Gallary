
const express = require('express');
const app = express();
const server = require('http').Server(app);


const routes = require('./routes/routes.js');


let MainApp = class {
    start(){
        app.use('/', routes);
        server.listen(8081, ()=>console.log("FRP server started"));
        app.use(express.static('./dist')); 
    }
}

module.exports = MainApp;