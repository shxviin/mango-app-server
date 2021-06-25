const router = require('express').Router();
const RoomRate = require('../models/RoomRate');


router.route('/add').post((req, res) => {

    const numOfGuests = req.body.numOfGuests;
    const stayType = req.body.stayType;
    const ratePerNight = req.body.ratePerNight;


    const newRoomRate = new RoomRate({numOfGuests, stayType, ratePerNight});

    newRoomRate.save()
        .then(() => res.json('Room rate added'))
        .catch(err => res.status(400).json('Error: ' + err));
})

router.route('/get').post((req, res) => {

    const numOfGuests = req.body.numOfGuests;
    const stayType = req.body.stayType;

    RoomRate.find({numOfGuests, stayType})
        .then(responses => {
            const roomRate = responses.map(response => {
                return response.ratePerNight;
            })
            res.json(roomRate[0]);
        })
        .catch(err => res.status(400).json('Error: ' + err));
})


module.exports = router;