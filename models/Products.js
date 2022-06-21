const mongoose = require('mongoose');


const productSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: true,
    }, 
    productImage: {
        type: String, 
        required: true,
    },
    ImageUrl: {
        type: String,
    }, 
})
 

module.exports = mongoose.model('Products', productSchema);