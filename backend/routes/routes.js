let express = require('express');
const route = express.Router();
const File = require('../controllers/filesController');
const file = new File();

route.get('/albums', function(reg, res, next){
    file.getDir().then(arr=>res.send(arr))
});





module.exports = route;