const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const roomShema = new Schema({
    roomId: {
        type: String,
        required: true,
        unique: true,
    },
    property: {
        type: String,
        required: true,
    },
    amenities: {
        type: Array,
    },
    roomName: {
        type: String,
        required: true,
    },
    roomDesc: {
        type: String,
    },
},{
    timestamps: true,
});

const Room = mongoose.model('Room', roomShema);

 module.exports = Room;