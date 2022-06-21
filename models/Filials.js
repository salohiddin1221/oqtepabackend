const mongoose = require('mongoose');

const FilialSchema = new mongoose.Schema({
    branch: {
        type: String, 
    },
    address: {
        type: String, 
    },
    reference1 : {
        type: String, 
    },
    reference2 : {
        type: String, 
    }, 
    location: { 
        type: String,
    },
    branchPhoto: {
        type: String,
    },
    photoUrl: {
        type: String,
    },
    branchCurator: {
        type: String,
    },
    branchManager: {
        type: String,
    },
    landlinePhone: {
        type: String,
    },
    curatorNumber: {
        type: String,
    },
    managerNumber: {
        type: String,
    },
    chefNumber: {
        type: String,
    },
    reChefNumber: {
        type: String,
    },
    recruiter: {
        type: String,
    },
    serviceType: {
        type: String,
    },
    playground: {
        type: String,
    },
    workTime: {
        type: String,
    }
 
})

module.exports = mongoose.model('Filial', FilialSchema);