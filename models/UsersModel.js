const { Schema, model } = require("mongoose");

const usersSchema = new Schema({
    username: String,
    hashedPassword: String,
});

const UsersModel = model("Users", usersSchema);

module.exports = UsersModel;
