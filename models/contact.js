const mongoose = require("mongoose");
const contactSchema = new mongoose.Schema({
  username: String,
  email: { type: String, required: true, unique: true },
  age: Number,
});
module.exports = mongoose.model("contact", contactSchema);
