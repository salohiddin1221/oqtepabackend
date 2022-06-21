const router = require('express').Router();
const User = require('../models/User');


//register
router.post('/register', async (req, res) => {
    try {
        const user = new User({
            login: req.body.login, 
            password: req.body.password
        });
        await user.save();
        res.send(user);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

//login
router.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({ login: req.body.login });
        if (!user) return res.status(404).json({ message: 'Foydalanuvchi topilmadi' });
        const isMatch  = await user.password
        if (!isMatch === req.body.password) return res.status(404).json({ message: 'Parol noto`g`ri' });
        res.json(user);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


module.exports = router;