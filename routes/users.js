require("dotenv").config();
require("../mongoose.js");

const express = require("express");
const router = express.Router();

const jwt = require("jsonwebtoken");
const UsersModel = require("../models/UsersModel.js");
const { ObjectId } = require("mongodb");

router.post("/login", async (req, res) => {
    res.send("Pong");
});

/////// REGISTER FUNCTION ////////

router.post("/register", async (req, res) => {
    console.log("working?");
    const { username, password } = req.body;

    const newUser = new UsersModel({
        username,
        hashedPassword: utils.hashPassword(password),
    });

    console.log("working?");

    await newUser.save();

    res.sendStatus(200);
});

router.post("/register", async (req, res) => {
	console.log(req.body);
	res.send({ username: "Karin" });
});

module.exports = router;
