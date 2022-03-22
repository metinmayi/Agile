require("dotenv").config();
require("../mongoose.js");

const express = require("express");
const router = express.Router();

const BookingModel = require("../models/BookingModel.js");

//Create booking
router.post("/book", async (req, res) => {
	const newBooking = new BookingModel(req.body);
	await newBooking.save();
	res.send({ message: "Success" });
});

module.exports = router;
