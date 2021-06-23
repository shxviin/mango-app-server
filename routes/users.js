const router = require('express').Router();
const User = require('../models/User');


router.route('/register').post((req, res) => {
    console.log(req);
    const email = req.body.email;
    const password = req.body.password;

    const newUser = new User({email, password});

    newUser.save()
        .then(() => res.json('User Added'))
        .catch(err => res.status(400).json('Error: ' + err));
})

router.route('/:id').get((req, res) => {

    User.find({email:req.params.id})
        .then(response => res.json(response))
        .catch(err => res.status(400).json('Error: ' + err));
})

module.exports = router;