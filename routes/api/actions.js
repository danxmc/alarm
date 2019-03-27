const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const circuit = require('../../circuit');

// Action Model
const Action = require('../../models/Action');

// @route   GET api/actions
// @desc    Get All Actions
// @access  Public
router.get('/', (req, res) => {
    Action.find()
    .populate('User', 'name email role')
    .sort({
        date: -1
    }).then(actions => res.json(actions));
});

// @route   POST api/actions
// @desc    Create An Action
// @access  Private
router.post('/', auth, (req, res) => {
    const newAction = new Action({
        type: req.body.type,
        User: req.body.User
    });

    circuit.emit('action', newAction.type);

    newAction.save((err, action) => {
        action
        .populate('User', 'name email role')
        .execPopulate()
        .then(action => res.json(action))
        .catch(err => res.status(500).json({
            success: false
        }));
    });
});

// @route   DELETE api/actions/:id
// @desc    Delete An Action
// @access  Private
router.delete('/:id', auth, (req, res) => {
    Action.findById(req.params.id)
    .then(action => action.remove()
    .then(() => res.json({
        success: true
    })))
    .catch(err => res.status(404).json({
        success: false
    }));
});

module.exports = router;