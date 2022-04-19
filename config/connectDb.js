const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Db is conneted");
  } catch (error) {
    console.log("Db is not connected");
  }
};
module.exports = connectDb;
