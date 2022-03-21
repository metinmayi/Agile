require("dotenv").config();
require("./mongoose");

const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const userRoutes = require("./routes/users.js");

const { ObjectId } = require("mongodb");

const app = express();
app.use(cors());

app.use(cookieParser());
app.use(express.static("public"));

//Routes
app.use("/users", userRoutes);

app.listen(3000, () => {
	console.log("Server is up");
});
