const app = require('./app'); //importing the app created in app.js

const server = app.listen(8080, () => { //tells app to listen on port 8080
    console.log(`Server is running on port ${server.address().port}`); //displays that server is on in terminal
});