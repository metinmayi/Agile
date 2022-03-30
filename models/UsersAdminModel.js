const mongoose = require("mongoose");

const userAdminSchema = new mongoose.Schema({
  hashedPassword: String,
  username: String,
});

const UsersAdminModel = mongoose.model(
  "usersadmin",
  userAdminSchema,
  "usersadmin"
);

module.exports = UsersAdminModel;
