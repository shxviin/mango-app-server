const router = require('express').Router();
const Booking = require('../models/Booking');

router.route('/add').post((req, res) => {

    const roomId = req.body.roomId;
    // const userId = req.body.userId;
    const checkInDate = req.body.checkInDate;
    const checkOutDate = req.body.checkOutDate;
    const isParkingSlotRequired = req.body.isParkingSlotRequired;
    const notes = req.body.notes;
    const fee = req.body.fee;
    const paymentMethod = req.body.paymentMethod;
    const typeOfStay = req.body.typeOfStay;
    const numOfGuests = req.body.numOfGuests;


    const newBooking = new Booking({roomId, checkInDate, 
        checkOutDate, isParkingSlotRequired, notes, fee, paymentMethod, typeOfStay, numOfGuests});

    newBooking.save()
        .then(() => res.json('Booking Added'))
        .catch(err => res.status(400).json('Error: ' + err));
})

router.route('/validate/:roomId').post((req, res) => {

    const checkInDate = new Date(req.body.checkIn).toISOString().split('T')[0];
    const checkOutDate = new Date(req.body.checkOut).toISOString().split('T')[0];

    Booking.find({roomId:req.params.roomId})
        .then(responses => {
            const filterBookings = responses.filter(response => {
                const bookedCheckInDate = new Date(response.checkInDate).toISOString().split('T')[0];
                const bookedCheckOutDate = new Date(response.checkOutDate).toISOString().split('T')[0];

                return (checkInDate == bookedCheckInDate) || 
                        ( (checkInDate > bookedCheckInDate) && (checkInDate < bookedCheckOutDate) ) || 
                        ( (checkOutDate > bookedCheckInDate) && (checkOutDate <= bookedCheckOutDate) ) ||
                        ( (checkInDate < bookedCheckInDate) && (checkOutDate > bookedCheckOutDate) );
            })
            res.json(filterBookings);
        })
        .catch(err => res.status(400).json('Error: ' + err));
})


router.route('/').get((req, res) => {

    Booking.find()
        .then(response => res.json(response))
        .catch(err => res.status(400).json('Error: ' + err));
})

module.exports = router;