const mongoose = require('mongoose');
 
var StorageSchema = new mongoose.Schema({
     name: {
        type: String
     },
     file: { 
        type: String,
        required: true
     },
     link: {
        type: String,
        required:true
     }
});
  
 
module.exports = mongoose.model('Storage', StorageSchema);