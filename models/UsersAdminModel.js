const mongoose = require("mongoose");

const userAdminSchema = new mongoose.Schema({
  email: String,
  hashedPassword: String,
});

const UsersAdminModel = mongoose.model("UserAdmin", userAdminSchema);

module.exports = UsersAdminModel;
