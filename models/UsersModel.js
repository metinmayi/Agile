const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: String,
    hashedPassword: String,
    hasLoggedIn: Number,
});

const UsersModel = mongoose.model("User", userSchema);

module.exports = UsersModel;
