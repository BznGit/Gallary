const express = require('express');
const admin = require('../../settings')
const route = express.Router();
const File = require('../controllers/filesController');
const file = new File();

route.get('/albums', function(req, res, next){
    console.log('d>')
    file.getDir().then(arr=>res.send(JSON.stringify(arr)))
});
route.post('/admin', function(req, res, next){
        console.log(req.body)
        console.log(admin)
        if(admin.login===req.body.name && admin.password===req.body.password) {
            
             res.send('ok')
       } else {
        res.send('not')
       }
  
        res.end();
});

route.get('/delete/:id', function(reg, res, next){
    console.log('id>', reg.params.id)
    file.delDir(reg.params.id).then(err=>{
        if(err) {
            console.log(err);
             res.send('exists')
       } else {
        res.statusCode=200;
        res.end();
       }
    })
});

route.get('/delete-file/:fold/:id', function(req, res, next){
    console.log('id>', req.params.id)
    console.log('id>', req.params.fold)
    file.delFile(req.params.fold, req.params.id).then(err=>{
        if(err) {
            console.log(err);
             res.send('exists')
       } else {
        res.statusCode=200;
        res.end();
       }
    })
});

route.post('/upload/:fold/:id', function(req, res, next){
    console.log('id>--', req.params.fold)
    file.setFile(req.params.fold, req.params.id).then(err=>{
        if(err) {
            console.log(err);
             res.send('exists')
       } else {
        res.statusCode=200;
        res.end();
       }
    })
   
    
});

route.post('/addfolder', function(req, res, next){
    console.log(req.body)
    file.setDir(req.body.name).then(err=>{
        if(err) {
            console.log(err);
             res.send('exists')
       } else {
        res.statusCode=200;
        res.end();
       }
    })
});



module.exports = route;