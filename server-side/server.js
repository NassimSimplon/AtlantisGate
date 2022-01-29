 //Express
 const express = require('express');
 const app = express()
 //DataBase
 const db = require('./config/db');
 db();
 //Cors
 const cors = require('cors');
 app.use(cors());
 app.use(express.json());
 //User 
 const user = require('./user/routes');
 app.use('/Atlantis',user);
 //Playlists
 const playlists = require('./Playlists/Routes');
 app.use('/Atlantis',playlists);
 //Authentication
 const authentication = require('./authentication/authRoutes');
 app.use('/Atlantis',authentication);
 //Contact
 const contact = require('./Contact/Routes');
 app.use('/Atlantis',contact);
  //Comment
  const Comment = require('./Comment/Routes');
  app.use('/Atlantis',Comment);
 //PORT
 app.listen(4000,()=>{
    console.log('Server is Running');
 })