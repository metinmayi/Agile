require("dotenv").config();
require("../mongoose.js");

const express = require("express");
const router = express.Router();

const BookingModel = require("../models/BookingModel.js");

// Get bookings by username
router.get("/:username", async (req, res) => {
    const bookings = await BookingModel.find({ username: req.params.username });
    res.send(bookings);
});

// Create Bookings
router.post("/book", async (req, res) => {
    const newBooking = new BookingModel(req.body);
    await newBooking.save();
    res.send({ message: "Success" });
});

// Cancel Booking
router.post("/cancel", async (req, res) => {
    await BookingModel.deleteOne({ _id: req.body.id });
    res.send({ message: "Success" });
});

module.exports = router;
