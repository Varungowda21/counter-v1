const mongoose = require("mongoose");

const configureDB = () => {
  mongoose
    .connect("mongodb://localhost:27017/counter-app")
    .then(() => {
      console.log("db connected");
    })
    .catch((err) => {
      console.log("err connecting", err);
    });
};

module.exports = configureDB;
