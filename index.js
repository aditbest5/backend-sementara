const db = require("./models");
const express = require("express");
const path = require("path");
dotenv = require("dotenv").config({ path: path.resolve("./.env") });
const cors = require("cors");
const app = express();
const port = process.env.PORT;

app.use(express.json());
db.sequelize.sync({ alter: true });
app.use(cors());

app.listen(port, () => console.log(`Server is running at port ${port}`));
