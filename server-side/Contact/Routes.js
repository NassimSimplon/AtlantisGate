const express = require('express')
const router = express.Router()
 const Contact = require('./Contoller');

 // add Contact 
 router.post('/Contact/add',Contact.addContact)
 // get all Contacts
 router.get('/Contacts/getAll',Contact.getAllContacts)
 //delete Contact
 router.delete('/Contact/delete/:id',Contact.deleteContact)
 //update Contact 
 router.put('/Contact/update/:id',Contact.updateContact)
 // get one Contact
 router.get('/Contact/get/:id',Contact.getContact)

 //Router
 module.exports = router