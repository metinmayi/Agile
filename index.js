require("dotenv").config();
require("./mongoose");

const express = require("express");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

const { ObjectId } = require("mongodb");

const app = express();

app.use(cookieParser());
app.use(express.static("public"));
