const router = require('express').Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');



//get users 
router.get('/', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
})


//get user by id
router.get('/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) return res.status(404).json({ message: 'Foydalanuvchi topilmadi' });
        res.json(user);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
})

//delete user by id
router.delete('/:id', async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) return res.status(404).json({ message: 'User not found' });
        res.json({ message: 'Foydalanuvchi muvaffaqiyatli o`chirildi' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
})

//update user put
router.put('/:id', async (req, res) => {
    try {
        try {
            const admin = await User.findByIdAndUpdate(req.params.id, req.body, {
                new: true
            });
            if (!admin) return res.status(404).json({ message: 'Admin topilmadi' });
            res.json(admin);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }   
})



module.exports = router;