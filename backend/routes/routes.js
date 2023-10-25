let express = require('express');
const route = express.Router();
const File = require('../controllers/filesController');
const file = new File();

route.get('/', function(reg, res, next){
    file.getDir().then(res=>console.log('>>',res))
    res.send ('Адрес не найден!')
          

});





module.exports = route;