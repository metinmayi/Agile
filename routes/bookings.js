require("dotenv").config();
require("../mongoose.js");

const express = require("express");
const router = express.Router();

const UsersModel = require("../models/UsersModel.js");
const utils = require("../utils.js");

//Create booking
router.post("/book", async (req, res) => {
	console.log("Booked");
});

module.exports = router;
