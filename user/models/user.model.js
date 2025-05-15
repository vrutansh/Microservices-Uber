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
    }

})


module.exports = mongoose.model('user', userSchema);
