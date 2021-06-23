const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userShema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
},{
    timestamps: true,
});

const User = mongoose.model('User', userShema);

 module.exports = User;