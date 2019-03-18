const express = require('express');
const router = express.Router();

// Action Model
const Action = require('../../models/Action');

// @route   GET api/actions
// @desc    Get All Actions
// @access  Public
router.get('/', (req, res) => {
    Action.find().sort({
        date: -1
    }).then(items => res.json(items));
});

// @route   POST api/actions
// @desc    Create An Action
// @access  Public
router.post('/', (req, res) => {
    const newAction = new Action({
        type: req.body.type
    });

    newAction.save().then(action => res.json(action));
});

// @route   DELETE api/actions/:id
// @desc    Delete An Action
// @access  Private
router.delete('/:id', (req, res) => {
    Action.findById(req.params.id)
    .then(item => item.remove()
    .then(() => res.json({
        success: true
    })))
    .catch(err => res.status(404).json({
        success: false
    }));
});

module.exports = router;