const express = require("express");
const connectDb = require("./config/connectDb");
const contactRoutes = require("./routes/contact");
require("dotenv").config();
const app = express();
connectDb();
app.use(express.json());
app.use("/api/contacts", contactRoutes);
app.listen(process.env.PORT, (err) =>
  console.log(`my server is runing ${process.env.PORT}`)
);
