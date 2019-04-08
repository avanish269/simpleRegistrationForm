const m = require('mongoose');

const rS = new m.Schema({
    name: {
        type:String,
        trim:true,
    },
    email: {
        type:String,
        trim:true,
    },
});

module.exports = m.model('Registration', rS);