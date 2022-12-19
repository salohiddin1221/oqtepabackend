const router = require('express').Router();
const Storage = require('../models/Storage')
const multer = require('multer'); 


// upload photo with multer
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/')
    }
    , filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})
 const upload = multer({ storage: storage })

 

//get storage
router.get('/', async (req,res)=>{
    try {
        const storage = await Storage.find()
        res.json(storage)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

//get by id section
router.get('/:id', async (req, res) => {
    try {
        const storage = await Storage.findById(req.params.id);
        if (!storage) return res.status(404).json({ message: 'Bo`lim  topilmadi' });
        res.json(storage);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
})


module.exports = router;