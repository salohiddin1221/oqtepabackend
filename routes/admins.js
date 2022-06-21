const router = require('express').Router();
const Admins = require('../models/Admins');

//create admin
router.post('/', async (req, res) => {
    try { 
        const admin = new Admins({
            login: req.body.login, 
            password: req.body.password
        });
        await admin.save();
        res.send(admin);
         
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

//login admin
router.post('/login', async (req, res) => {
    try {
        const admin = await Admins.findOne({ login: req.body.login });
        if (!admin) return res.status(404).json({ message: 'Admin topilmadi' });
        const isMatch  = await admin.password
        if (!isMatch === req.body.password) return res.status(404).json({ message: 'Parol noto`g`ri' });
        res.json(admin);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

//get all admins
router.get('/', async (req, res) => {
    try {
        const admins = await Admins.find();
        res.json(admins);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

//get admin by id
router.get('/:id', async (req, res) => {
    try {
        const admin = await Admins.findById(req.params.id);
        if (!admin) return res.status(404).json({ message: 'Admin topilmadi' });
        res.json(admin);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

//update admin
router.put('/:id', async (req, res) => {
    try {
        const admin = await Admins.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        });
        if (!admin) return res.status(404).json({ message: 'Admin topilmadi' });
        res.json(admin);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

//delete admin
router.delete('/:id', async (req, res) => {
    try {
        const admin = await Admins.findByIdAndDelete(req.params.id);
        if (!admin) return res.status(404).json({ message: 'Admin topilmadi' });
        res.json({ message: 'Admin muvaffaqiyatli o`chirildi' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});




module.exports = router;