const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = mongoose.model('User');

// Create Schema
const ActionSchema = new Schema({
    type: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    User: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: false
    }
});

module.exports = Action = mongoose.model('Action', ActionSchema);