var express = require('express');
var router = express.Router();



// let datausers 
let datausers = require("../data.json")

// let datausers = [
//   {
//     'id': 1,
//     'username': 'tito',
//     'domisili': 'surabaya',
//   },
  
//   {
//     'id': 2,
//     'username': 'daffa',
//     'domisili': 'jakarta',
//   },

//   {
//     'id': 3,
//     'username': 'rico',
//     'domisili': 'sidoarjo',
//   }
// ]

/* GET users listing. */
// router.get('/', function(req, res, next) {
//     res.status(200).json({
//       'status' : 200,
//       'message': 'Berhasil Get Data Users',
//       'data' : datausers
//     })
//  });
 
 router.post('/', function(req, res, next) {
   res.status(200).json({
     'status' : 200,
     'message': 'Berhasil Get Data Users',
     'data' : datausers
   })
 });
 
router.get('/login', function(req, res, next) {
        res.status(200).json({
          'status' : 200,
          'message': 'Berhasil Get Data Users',
          'data' : datausers
        })
    });
 
 
//  router.get('/:id', function(req, res, next) {
//    res.send('respond with a resource coba');
//  });
 
 router.post('/login', function(req, res, next) {
     // ngecek username sama password
     console.log(req)
     datausers.map((item, index) => {
         // jika username dan password sama, kirim token
         if(item.username === req.body.username && item.domisili === req.body.domisili) {
           res.json({
             "message" : "login berhasil",
           })
           // redirect suits
           // res.redirect('/suits?isLogin=true')
         }
     })
 
     res.json({
       "message" : "username atau password salah",
     })
 })
 
 
 module.exports = router;
