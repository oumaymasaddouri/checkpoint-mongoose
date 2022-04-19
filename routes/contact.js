const express = require("express");
const {
  addContact,
  FindContact,
  DeleteContact,
  UpdateContact,
  GetOneContact,
} = require("../controllers/contact");

const contact = require("../models/contact");
const contactRoutes = express.Router();
contactRoutes.post("/", addContact);
contactRoutes.get("/getcontact", FindContact);
contactRoutes.delete("/deletecontact/:id", DeleteContact);
contactRoutes.put("/updatedcontact/:id", UpdateContact);

contactRoutes.get("/:id", GetOneContact);

module.exports = contactRoutes;
