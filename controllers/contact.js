const contact = require("../models/contact");

exports.addContact = async (req, res) => {
  try {
    const newContact = new contact(req.body);
    const found = await contact.findOne({ email: req.body.email });
    if (found) {
      return res.status(400).send("contact email is already existed");
    }

    await newContact.save();
    res.status(200).send({ msg: "contact added", newContact });
  } catch (error) {
    res.status(500).send("could not add contact");
  }
};
exports.FindContact = async (req, res) => {
  try {
    const contacts = await contact.find();
    res.status(200).send({ msg: "list of contacts", contacts });
  } catch (error) {
    res.status(500).send("could not get contact");
  }
};
exports.DeleteContact = async (req, res) => {
  try {
    const deletecontact = await contact.findByIdAndDelete(req.params.id);
    res.status(200).send({ msg: "contact is deleted", deletecontact });
  } catch (error) {
    res.status(500).send({ msg: "could not delete contact" });
  }
};
exports.UpdateContact = async (req, res) => {
  try {
    const updatedcontact = await contact.findByIdAndUpdate(req.params.id, {
      $set: req.body,
    });
    console.log(req.body);
    res.status(200).send({ msg: "contact is updated", updatedcontact });
  } catch (error) {
    res.status(500).send({ msg: "could not update contact" });
  }
};
exports.GetOneContact = async (req, res) => {
  try {
    const oneContact = await contact.findById(req.params.id);
    res.status(200).send({ msg: "one contact found", oneContact });
  } catch (error) {
    res.status(500).send({ msg: "could not get one", oneContact });
  }
};
