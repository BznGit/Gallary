let express = require('express');
const ApiController = require('../controllers/apiController.js');
const DbController = require('../controllers/dbController.js');
const DataHelper = require('../model/dataHelper.js');

const route = express.Router();
const api = new ApiController();
const db = new DbController();
const dhp = new DataHelper();


route.get('/frea-general', function(reg, res, next){
    api.getFreaGeneral()
    .then(data=>{
        res.send(JSON.stringify(data));
        res.end()
    })
});

route.get('/general', function(reg, res, next){
    api.getOneNode()
    .then(data=>{
        res.send(JSON.stringify(data));
        res.end()
    })
});

route.get('/exchange', function(reg, res, next){
    db.getBtcRate().then(data=>{
        res.send(data)
    })
});

route.get('/miner/:id', function(reg, res, next){
    api.getOneMiner(reg.params.id)
    .then(data=>{
        if(data){
            data.miner = reg.params.id;
            res.render('user', dhp.dataUserHelper(data));
        }else {
            res.send ('Адрес не найден!')
            //res.redirect('/');
            
        }
      
    })
});

route.get('/pool-chart', function(reg, res, next){
   /* api.getPoolChart().then(data=>{
        res.send(JSON.stringify(data));
        res.end()
    })*/
    db.getPoolHashrate().then(data=>{
        res.send(JSON.stringify(data));
        res.end()
    })
});

route.post('/save', function(reg, res, next){
    let newUser = reg.body;
    db.setUser(newUser).then(function(inf){
        if(inf==null){
            res.send('exist');
            res.end();
        }else{
            res.send('saved');
            res.end();
        }
    })
});

route.post('/getuser', function(reg, res, next){
    let oldUser = reg.body;
    db.getUser(oldUser.id).then(function(user){          
        if(user){
            res.send(JSON.stringify(user));
            res.end();
        }else{
            res.statusCode=403;
            res.send('errlog');
            res.end();
        } 
    })
});

module.exports = route;