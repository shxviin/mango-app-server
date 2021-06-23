const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.port || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser:true, useCreateIndex:true, useUnifiedTopology: true});

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB connection is successful!");
})

const usersRouter = require('./routes/users');
const roomsRouter = require('./routes/rooms');
const bookingsRouter = require('./routes/bookings');

app.use('/users', usersRouter);
app.use('/rooms', roomsRouter);
app.use('/bookings', bookingsRouter);

app.listen(port, () => {
    console.log(`Server is running in the port ${port}`);
});