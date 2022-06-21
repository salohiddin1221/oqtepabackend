const mongoose = require('mongoose');


const AdminSchema = new mongoose.Schema({
    login: {
        type: String,
        required: true,
    },  
    password: {
        type: String,
        required: true,
    },
})

module.exports = mongoose.model('Admins', AdminSchema);