const route = require('express').Router();
const Filial = require('../models/Filials');
const multer = require('multer');
const {v4 : uuidv4} = require('uuid')

const newId = uuidv4()


// upload photo with multer
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/')
    }
    , filename: function (req, file, cb) {
        cb(null, newId + '-' + file.originalname )
    }
})
 const upload = multer({ storage: storage })

//post filial with multer
route.post('/', upload.single('branchPhoto'), async (req, res) => {
    try {
        const filial = new Filial(req.body);
        // filial.branchPhoto = newId + '-' + req.file.originalname;
        // filial.photoUrl =  `http://localhost:5000/media/${filial.branchPhoto}`;
        await filial.save();
        res.status(201).json(filial);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
})

//get filials
route.get('/', async (req, res) => {
    try {
        const filials = await Filial.find();
        res.status(200).json(filials);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
})

//get filial by id
route.get('/:id', async (req, res) => {
    try {
        const filial = await Filial.findById(req.params.id);
        res.status(200).json(filial);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
})

//update filial by id
route.put('/:id', async (req, res) => {
    try {
        const filial =  await Filial.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json(filial);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
})

//delete filial by id
route.delete('/:id', async (req, res) => {
    try {
        await Filial.findByIdAndDelete(req.params.id); 
        res.status(200).json({ message: 'Filial deleted' });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
})


module.exports = route; 