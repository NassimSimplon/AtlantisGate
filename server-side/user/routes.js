 //Express
 const express = require('express')
 //Middleware
 const store = require('../middleware/multer')
 //Router
 const router = express.Router();
 //Controller
 const User = require('./controller');

 // add User 
 router.post('/user/add',store.single('image'),User.addUser)
 // get all Users
 router.get('/users/getAll',User.getAllUsers)
 //delete User
 router.delete('/user/delete/:id',User.deleteUser)
 //update User 
 router.put('/user/update/:id',store.single('image'),User.updateUser)
 // get one User
 router.get('/user/get/:id',User.getUser)

 //Router
 module.exports = router