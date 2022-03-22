const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
	username: String,
	hashedPassword: String,
});

const UsersModel = mongoose.model("User", userSchema);

module.exports = UsersModel;
