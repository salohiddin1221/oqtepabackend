const route = require('express').Router();
const Products = require('../models/Products');
const multer = require('multer'); 

const MainURL = "http://localhost:5000"
//const MainURL = "https://oqtepa-backend.herokuapp.com"

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




//post product
route.post('/', upload.single('productImage'), async (req, res) => {
    try {
        const product = new Products(req.body);
        product.productImage = req.file.originalname;
        product.ImageUrl = `${MainURL}/media/${product.productImage}`;
        await product.save();
        res.status(201).json(product);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
})

//get products with image
route.get('/', async (req, res) => {
    try {
        const products = await Products.find();
        res.status(200).json(products);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
})  

//get product by id
route.get('/:id', async (req, res) => {
    try {
        const product = await Products.findById(req.params.id);
        res.status(200).json(product);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
})

//update product
route.put('/:id',upload.single('productImage'),  async (req, res) => {
    if (req.file) {
        var updatedProduct = {
            name: req.body.name,
            productImage: req.file.originalname,
            ImageUrl: `${MainURL}/media/${req.file.originalname}`
        }
    } else {
        var updatedProduct = {
            name: req.body.name,
        }
    }  
    try {
        const product = await Products.findByIdAndUpdate(req.params.id, updatedProduct, { new: true });
        res.status(200).json(product);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
})

//delete product
route.delete('/:id', async (req, res) => {
    try {
        await Products.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Deleted' });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
})




module.exports = route;