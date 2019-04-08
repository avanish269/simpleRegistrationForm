require('dotenv').config();
const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE,{useNewUrlParser:true});
mongoose.Promise=global.Promise;
mongoose.connection.on('connected',function () {
    console.log(`Mongoose connection is open on ${process.env.DATABASE}`);
})
    .on('error', (err)=>{
        console.log(`Connection error: ${err.message}`);
    });

require('./models/registration')
const app = require('./app'); //importing the app created in app.js
const server = app.listen(8080, () => { //tells app to listen on port 8080
    console.log(`Server is running on port ${server.address().port}`); //displays that server is on in terminal
});