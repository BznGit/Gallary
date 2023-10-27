let express = require('express');

const route = express.Router();
const File = require('../controllers/filesController');
const file = new File();


route.get('/albums', function(reg, res, next){
    file.getDir().then(arr=>res.send(arr))
});

route.post('/addfolder', function(req, res, next){
    console.log(req.body)
    file.setDir(req.body.name).then(err=>{
        if(err) {
            console.log(err);
             res.send('exists')
       }
    })
});



module.exports = route;