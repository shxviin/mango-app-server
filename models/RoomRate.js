const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const roomRateShema = new Schema({
    numOfGuests: {
        type: String,
        required: true,
    },
    stayType: {
        type: String,
        required: true,
    },
    ratePerNight: {
        type: String,
        required: true,
    }
},{
    timestamps: true,
});

const RoomRate = mongoose.model('RoomRate', roomRateShema);

module.exports = RoomRate;