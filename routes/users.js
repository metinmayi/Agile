require("dotenv").config();
require("../mongoose.js");

const express = require("express");
const router = express.Router();

const jwt = require("jsonwebtoken");
const UsersModel = require("../models/UsersModel.js");
const { ObjectId } = require("mongodb");
const utils = require("../utils.js");

router.post("/login", async (req, res) => {
	res.send("Pong");
});

/////// REGISTER FUNCTION ////////

router.post("/register", async (req, res) => {
	const { username, password } = req.body;
	const newUser = new UsersModel({
		username,
		hashedPassword: utils.hashPassword(password),
	});

	try {
		const bajs = await newUser.save();
		console.log(bajs);
	} catch (error) {
		console.log(error);
	}

	res.redirect("http://127.0.0.1:5500/login.html");
});

router.post("/register", async (req, res) => {
	console.log(req.body);
	res.send({ username: "Karin" });
});

module.exports = router;
