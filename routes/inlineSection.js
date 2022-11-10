const router = require('express').Router();
const InlineSection = require('../models/InlineSection')


// get section
router.get('/', async (req, res) => {
    try {
        const section = await InlineSection.find();
        res.json(section);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
})

//get by id section
router.get('/:id', async (req, res) => {
    try {
        const section = await InlineSection.findById(req.params.id);
        if (!section) return res.status(404).json({ message: 'Bo`lim  topilmadi' });
        res.json(section);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
})


// post section
router.post('/' , async (req, res) => {
    try {
        const section = new InlineSection({
            content: req.body.content,
            sectionId: req.body.sectionId
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
            const section = await InlineSection.findByIdAndUpdate(req.params.id, req.body, {
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
        const section = await InlineSection.findByIdAndDelete(req.params.id);
        if (!section) return res.status(404).json({ message: 'User not found' });
        res.json({ message: 'Bo`lim muvaffaqiyatli o`chirildi' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
})



module.exports = router;