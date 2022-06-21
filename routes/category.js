// const route = require('express').Router();
// const Category = require('../models/Category');

// //get category by id
// route.get('/:id', async (req, res) => {
//     try {
//         const category = await Category.findOne({ _id: req.params.id });
//         if (!category) return res.status(404).json({ message: 'Category not found' });
//         res.json(category);
//     } catch (err) {
//         res.status(500).json({ message: err.message });
//     }
// })

// //create category
// route.post("/", async (req, res) => { 
//     try {
//         const category = new Category(req.body);
//         await category.save();
//         res.status(201).json(category);
//     } catch (err) {
//         res.status(400).json({ message: err.message });
//     }
// })
 
// //get all categories
// route.get('/', async (req, res) => {
//     try {
//         const categories = await Category.find();
//         res.status(200).json(categories);
//     } catch (err) {
//         res.status(400).json({ message: err.message });
//     }
// })

// //update category by id
// route.put('/:id', async (req, res) => {
//     try {
//         const category = await Category.findByIdAndUpdate(req.params.id, req.body);
//         res.status(200).json(category);
//     } catch (err) {
//         res.status(400).json({ message: err.message });
//     }
// })


// //delete category by id
// route.delete('/:id', async (req, res) => {
//     try {
//         const category = await Category.findByIdAndDelete(req.params.id);
//         res.status(200).json(category);
//     } catch (err) {
//         res.status(400).json({ message: err.message });
//     }
// })



// module.exports = route