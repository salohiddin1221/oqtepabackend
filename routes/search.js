const router = require('express').Router(); 
const Products = require('../models/Products');  

//search
router.post('/:search', async (req, res) => {

    var allResult = []

    try {
        const search = req.params.search;
        const result = await Products.find({ name: { $regex: search, $options: 'i' } });
        if (result.length > 0) { 
            for (let i = 0; i < result.length; i++) { 
                allResult.push(result[i])
            }
        } 
       
        res.json(allResult);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});




module.exports = router;