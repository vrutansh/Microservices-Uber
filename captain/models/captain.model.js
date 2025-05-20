const mongoose = require('mongoose');
const { setThePassword } = require('whatwg-url');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required : true
    },

    email: {
        type: String,
        unique: true
    },

    password: {
        type: String,
        required: true
    },

    isAvailable: {
        type: Boolean,
        default: false
    }

})


module.exports = mongoose.model('captain', userSchema);
