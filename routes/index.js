const express = require('express'); //importing express
const router = express.Router(); //creating router

router.get('/', function(req,res){
    res.send("Routing is working"); //sending message
});

module.exports = router;