const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bookingShema = new Schema({
    roomId: {
        type: String,
        required: true,
    },
    userId: {
        type: String,
        required: true,
    },
    checkInDate: {
        type: Date,
        required: true,
    },
    checkOutDate: {
        type: Date,
        required: true,
    },
    isParkingSlotRequired: {
        type: Boolean,
        required: true,
    },
    notes: {
        type: String,
    },
    fee: {
        type: String,
        required: true,
    },
    paymentMethod: {
        type: String,
        required: true,
    },
},{
    timestamps: true,
});

const Booking = mongoose.model('Booking', bookingShema);

module.exports = Booking;