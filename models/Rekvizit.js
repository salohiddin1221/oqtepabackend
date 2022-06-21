const mongoose = require('mongoose');

const RekvizitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    address: {
        type: String,
    },
    phone: {
        type: String,
    },
    fax: {
        type: String,
    },
    bankaccount: {
        type: String,
    },
    bankname: {
        type: String,
    },
    bankcode: {
        type: String,
    },
    inn: {
        type: String,
    }

})

module.exports = mongoose.model('Rekvizit', RekvizitSchema);