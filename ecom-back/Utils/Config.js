const mongoose = require("mongoose");
const connectDb = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/ecom-app");
    console.log("db connection successfully");
  } catch (error) {
    console.log(error);
    process.exit(0);
  }
};
module.exports = connectDb;
