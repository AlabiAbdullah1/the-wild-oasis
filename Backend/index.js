const express = require("express");
const dotenv = require("dotenv");
const db = require("./models");
const sequelize = require("./config/Sequelize");
const user = require("./models/user");

dotenv.config();

const port = process.env.PORT;

const app = express();

sequelize
  .sync({ force: false }) //? `force: true` will drop the table if it already exists and recreate it
  .then(() => {
    console.log("Database & tables created!");
  })
  .catch((error) => {
    console.error(error.message);
  });

app.get("/", async (req, res) => {
  const users = await user.find();
  return res.status(200).json({
    message: "success",
    users,
  });
});

app.listen(port, () => console.log(`server is running on port ${port}`));
