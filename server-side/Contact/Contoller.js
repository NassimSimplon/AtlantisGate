const CONTACT = require("./Model");
 

module.exports = {
  //add_Contact

  addContact: async (req, res) => {
  const nom = req.body.nom;
  const email = req.body.email;
  const telephone = req.body.telephone;
    try {
      const Contact = await new CONTACT({
        nom,email,telephone
      
      });
      await Contact.save();
      res.json(Contact);
    } catch (error) {
      console.error(error.message);
    }
  },

  //getAllContacts

  getAllContacts: async (req, res) => {
    try {
      const Contact = await CONTACT.find();
      res.json(Contact);
    } catch (error) {
      console.error(error.message);
    }
  },

  //deleteContact

  deleteContact: async (req, res) => {
    try {
      const Contact = await CONTACT.findByIdAndDelete(req.params.id);
      res.json(Contact);
    } catch (error) {
      console.error(error.message);
    }
  },

  //updateContact

  updateContact: async (req, res) => {
    try {
      const Contact = await CONTACT.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      res.json(Contact);
    } catch (error) {
      console.error(error.message);
    }
  },

  //getContact

  getContact: async (req, res) => {
    try {
      const Contact = await CONTACT.findById(req.params.id);
      res.json(Contact);
    } catch (error) {
      console.error(error.message);
    }
  },
};