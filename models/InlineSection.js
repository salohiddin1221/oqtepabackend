const mongoose = require('mongoose');

const InlineSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
    },
    sectionId: {
        type: String,
        required: true,
    },
})

module.exports = mongoose.model('InlineSection', InlineSchema);