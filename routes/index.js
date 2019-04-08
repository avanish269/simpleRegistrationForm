const express = require('express'); //importing express
const router = express.Router(); //creating router
const {body, validationResult} = require('express-validator/check');
const m = require('mongoose');
const r = m.model('Registration');
const path = require('path');
const auth = require('http-auth');
const basic = auth.basic({
    file:path.join(__dirname,'../users.htpasswd'),
});

router.get('/', function(req,res){
    res.render('form', {title:'Registration Form'}); //sending message
});

router.post('/', [
    body('name').isLength({min:1}).withMessage('Please enter a name'),
    body('email').isLength({min:1}).withMessage('Please enter an email'),
] ,function (req,res) {
    const errors = validationResult(req);
    if(errors.isEmpty()){
        const rr = new r(req.body);
        rr.save()
            .then(()=>{res.send("Thank you for registration");})
            .catch(()=>{res.send("Thank you for registration");});
    }
    else{
        res.render('form',{
            title: 'Registration Form',
            errors: errors.array(),
            data: req.body,
        });
    }

});

router.get('/registrations', auth.connect(basic), function (req,res) {
    r.find()
        .then((registrations)=>{
            res.render('index', {title:'List of All Registrations', registrations});
        })
        .catch(()=>{
            res.send("Something went wrong");
        });
});

module.exports = router;