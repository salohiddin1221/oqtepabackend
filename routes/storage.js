const route = require('express').Router();
const Storage = require('../models/Storage')
const multer = require('multer'); 
const {storage } = require('../routes/uploadRouter')

//const MainURL = "http://localhost:5000"
//const MainURL = "https://oqtepa-backend.herokuapp.com"


// upload photo with multer
// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, './uploads/')
//     }
//     , filename: function (req, file, cb) {
//         cb(null, file.originalname)
//     }
// })
//  const upload = multer({ storage: storage })

const upload = multer({
    storage
});

 //post storage
route.post('/', upload.single('file'), async (req, res) => {
    try {
        const storage = new Storage(req.body);
        storage.file = req.file.originalname;
        storage.link = `https://res.cloudinary.com/du6osjcvh/image/upload/oqtepa/${storage.file}`;
        await storage.save();
        res.status(201).json(storage);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
})

//get storage
route.get('/', async (req,res)=>{
    try {
        const storage = await Storage.find()
        res.json(storage)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

//get by id section
route.get('/:id', async (req, res) => {
    try {
        const storage = await Storage.findById(req.params.id);
        if (!storage) return res.status(404).json({ message: 'Bo`lim  topilmadi' });
        res.json(storage);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
})

//delete storage
route.delete('/:id', async (req, res) => {
    try {
        await Storage.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Deleted' });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
})


module.exports = route;