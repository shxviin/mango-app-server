const router = require('express').Router();
const Room = require('../models/Room');


router.route('/add').post((req, res) => {

    const roomId = req.body.roomId;
    const property = req.body.property;
    const amenities = req.body.amenities;
    const roomName = req.body.roomName;
    const roomDesc = req.body.roomDesc;

    const newRoom = new Room({roomId, property, amenities, roomName, roomDesc});

    newRoom.save()
        .then(() => res.json('Room Added'))
        .catch(err => res.status(400).json('Error: ' + err));
})

router.route('/property/:propertyName').get((req, res) => {

    Room.find({property:req.params.propertyName})
        .then(response => res.json(response))
        .catch(err => res.status(400).json('Error: ' + err));
})

module.exports = router;