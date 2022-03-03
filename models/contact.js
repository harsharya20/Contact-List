const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
     phoneno: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    }
    
});
//mongodb is flexible becoz it can make changes to schema which are defined like name phoneno address we can add age gender very easily
const Contact = mongoose.model('Contact',contactSchema);

module.exports = Contact;