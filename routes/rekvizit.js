const route = require('express').Router();
const Rekvizit = require('../models/Rekvizit');


// get rekvizit
route.get('/', async (req, res) => {
    try {
        const rekvizit = await Rekvizit.find();
        res.status(200).json(rekvizit);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
})

//post rekvizit
route.post('/', async (req, res) => {
    try {
        const rekvizit = new Rekvizit(req.body);
        await rekvizit.save();
        res.status(201).json(rekvizit);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
})

//get rekvizit by id
route.get('/:id', async (req, res) => {
    try {
        const rekvizit = await Rekvizit.findById(req.params.id);
        res.status(200).json(rekvizit);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
})

//update rekvizit
route.put('/:id', async (req, res) => {
    try {
        const rekvizit = await Rekvizit.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(rekvizit);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
})

//delete rekvizit
route.delete('/:id', async (req, res) => {
    try {
        await Rekvizit.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Deleted' });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
})

module.exports = route;