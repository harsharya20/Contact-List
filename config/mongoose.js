const mongoose = require('mongoose');


//connect to database
mongoose.connect('mongodb://localhost/contact_lumiq');

//acquire the connection(to check if it is successful)
const db = mongoose.connection;

//error message
db.on('error', console.error.bind(console,'error connecting to database'));


//up and running 
db.once('open',function(){
    console.log('successfully connected to database');
});

module.exports = db;