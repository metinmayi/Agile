require("dotenv").config();
require("../mongoose.js");

const express = require("express");
const router = express.Router();

const jwt = require("jsonwebtoken");
const UsersAdminModel = require("../models/UsersAdminModel.js");
const { ObjectId } = require("mongodb");
const utils = require("../utils.js");

router.post("/loginadmin", async (req, res) => {
  const { username, hashedPassword } = req.body;

  try {
    const admin = await UsersAdminModel.findOne({ username: username });
    console.log(admin);
    if (!admin) {
      return res.send({
        message: "Den här användaren är inte registrerad hos oss.",
        loggedIn: false,
      });
    }
    const passwordAdminMatch = hashedPassword === admin.hashedPassword;
    if (!passwordAdminMatch) {
      return res.send({
        message: "Fel lösenord",
        loggedIn: false,
      });
    }
    res.send({ message: "Välkommen", loggedIn: true });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
