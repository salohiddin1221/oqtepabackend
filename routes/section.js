const router = require('express').Router();
const Section = require('../models/Sections')


// get section
router.get('/', async (req, res) => {
    try {
        const section = await Section.find();
        res.json(section);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
})

//get by id section
router.get('/:id', async (req, res) => {
    try {
        const section = await Section.findById(req.params.id);
        if (!section) return res.status(404).json({ message: 'Bo`lim  topilmadi' });
        res.json(section);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
})


// post section
router.post('/' , async (req, res) => {
    try {
        const section = new Section({
            name: req.body.name,
            icon: req.body.icon
        })

        await section.save();
        res.status(201).json(section) 
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
})


// edit section
router.put('/:id', async (req, res) => {
    try {
        try {
            const section = await Section.findByIdAndUpdate(req.params.id, req.body, {
                new: true
            });
            if (!section) return res.status(404).json({ message: 'Bo`lim topilmadi' });
            res.json(section);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }   
})

// delete section

router.delete('/:id', async (req, res) => {
    try {
        const section = await Section.findByIdAndDelete(req.params.id);
        if (!section) return res.status(404).json({ message: 'User not found' });
        res.json({ message: 'Bo`lim muvaffaqiyatli o`chirildi' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
})



module.exports = router;