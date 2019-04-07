const express = require('express'); //importing express
const router = express.Router(); //creating router

router.get('/', function(req,res){
    res.render('form', {title:'Registration Form'}); //sending message
});

module.exports = router;