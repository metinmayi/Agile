require("dotenv").config();
require("../mongoose.js");

const express = require("express");
const router = express.Router();

const jwt = require("jsonwebtoken");
const UsersModel = require("../models/UsersModel.js");
const { ObjectId } = require("mongodb");
const utils = require("../utils.js");

router.post("/login", async (req, res) => {
    const { username, password } = req.body;
    //Checks for the same username
    try {
        const getUser = await UsersModel.findOne({ username: username });
        // If there was no user found
        if (!getUser) {
            return res.send({
                message: "Det användarnamnet är inte registrerat hos oss.",
                loggedIn: false,
            });
        }
        const passwordMatch = utils.comparePassword(
            password,
            getUser.hashedPassword
        );
        if (!passwordMatch) {
            return res.send({
                message: "Fel lösenord.",
                loggedIn: false,
            });
        }
        res.send({ message: "Välkommen", loggedIn: true });
    } catch (error) {
        console.log(error);
    }
});

/////// REGISTER FUNCTION ////////

router.post("/register", async (req, res) => {
    const { username, password } = req.body;
    const newUser = new UsersModel({
        username,
        hashedPassword: utils.hashPassword(password),
        hasLoggedIn: false,
    });

    try {
        await newUser.save();
    } catch (error) {
        console.log(error);
    }

    res.redirect("http://127.0.0.1:5500/login.html");
});

router.get("/userId", async (req, res) => {
    const getUser = req.username;
    const user = await UsersModel.findOne({ username: getUser });
    res.send({ user: user });
});

module.exports = router;
