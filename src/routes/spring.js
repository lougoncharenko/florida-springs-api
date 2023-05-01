const express = require('express')
const router = express.Router();

//models
const Spring = require('../models/spring')

/** Route to get all springs. */
router.get('/', (req, res) => {
    Spring.find().then((springs) => {
        return res.json({springs})
    })
    .catch((err) => {
        throw err.message
    });
})

/** Route to get one spring by id. */
router.get('/:springId', (req, res) => {
    Spring.findOne({_id: req.params.springId})
    .then(result => {
        res.json(result)
    }).catch(err => {
        throw err.message
    })
})

/** Route to add a new spring. */
router.post('/', (req, res) => {
    // POST localhost:3000/springs
    let spring = new Spring(req.body)
    spring.save().then(springResult => {
        return res.json({spring: springResult})
    }).catch((err) => {
        throw err.message
    })
})

/** Route to update an existing spring */
router.put('/:springId', (req, res) => {
    Spring.findByIdAndUpdate(req.params.springId, req.body).then(() => {
        return Spring.findOne({_id: req.params.springId})
    }).then((spring) => {
        return res.json({spring})
    }).catch((err) => {
        throw err.message
    })
})

/** Route to delete a spring. */
router.delete('/:springId', (req, res) => {
    Spring.findByIdAndDelete(req.params.springId).then((result) => {
        if (result === null) {
            return res.json({message: 'Spring does not exist.'})
        }
        return res.json({
            'message': 'Successfully deleted.',
            '_id': req.params.springId
        })
    })
    .catch((err) => {
        throw err.message
    })
})

module.exports = router