const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
	username: String,
	date: String,
	address: String,
	postalCode: String,
	district: String,
	time: String,
});

const BookingModel = mongoose.model("Booking", bookingSchema, "bookings");

module.exports = BookingModel;
