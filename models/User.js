const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        default: 'user'
    },
    register_date: {
        type: Date,
        default: Date.now
    }
});

UserSchema.pre('save', () => {
    this.role = 'user';
});

module.exports = User = mongoose.model('User', UserSchema);