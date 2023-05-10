const express = require('express')
const router = express.Router();
const springs = require('../data/Springs')

//models
const Spring = require('../models/spring')

/** Route to get all springs. */
router.get('/', async (req, res) => {
    if (req.user) {
    try {
        const springs = await Spring.find();
        return res.json({ springs });
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
    } else {
        return res.status(401).json({ message: 'You must be logged in to view the springs.' });
    }
});

/** Route to get one spring by id. */
router.get('/:springId', async (req, res) => {
    if (req.user) {
        const { springId } = req.params;
    try {
        const spring = await Spring.findById(springId);
        if (!spring) {
            return res.status(404).json({ message: 'Spring data not found' });
        }
        return res.json({ spring });
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
    }
    else {
        return res.status(401).json({ message: 'You must be logged in to view a spring.' });
    }
});

/** Route to add a new spring. */
router.post('/', async (req, res) => {
    if (req.user) {
        const { name, address, description, rating, entrance_fee  } = req.body;
    try {
        const spring = await Spring.create({ name, address, description, rating, entrance_fee });
        return res.status(201).json({ spring });
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
    }
    else {
        return res.status(401).json({ message: 'You must be logged in create an spring' });
    }
});


/** Route to update an existing spring */
router.put('/:springId', async (req, res) => {
    if (req.user) {
    try {
        const spring = await Spring.findByIdAndUpdate(req.params.springId, req.body, { new: true });
        return res.json({ spring });
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
    }
    else {
        return res.status(401).json({ message: 'You must be logged in to update a spring' });
    }
    });

/** Route to delete a spring. */
router.delete('/:springId', async (req, res) => {
    if (req.user) {
        try {
            const spring = await Spring.findByIdAndDelete(req.params.springId);
            return res.json({ spring });
        }
        catch (err) {
            res.status(500).json({ error: err.message })
        }
    } else {
        return res.status(401).json({ message: 'You must be logged in to delete an spring.' });
    }
});


module.exports = router