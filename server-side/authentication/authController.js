const USER = require("../user/model");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")
module.exports = {
  //Register
  register:(req,res)=>{

    USER.findOne({ email: req.body.email }).exec(async (error, user) => {
      if (user)
        return res.status(400).json({
          error: "User already registered",
        });

        
        const fullName = req.body.fullName;
        const image = '/image/image-1635988363457.png'
        const email = req.body.email;
        const salt = await new bcrypt.genSalt(10)
        const password = await new bcrypt.hash(req.body.password, salt);

        const _user = new USER({
      
        fullName,
        image,
     
        email,
        password 
      
       });
        _user.save((error, user) => {
        if (error) {
          return res.status(400).json({
            message: "Something went wrong",
          });
        }
        if (user) {
          return res.status(201).json({
            message: "User created suceesfully !",
            user
          })
        }
      });
    });
      
         
  },
  //Sign In
    signIn : (req, res) => {
        USER.findOne({ email: req.body.email }).exec(async (error, user) => {
          if (error) return res.status(400).json({ error });
          if (user) {
            const verPass =  await new bcrypt.compare(req.body.password,user.password)
             if (verPass && user.role === 'user') {
              const token =  jwt.sign({_id:user._id,fullName:user.fullName,image:user.image,email:user.email,role:user.role},'MEARNSECRET',{expiresIn:'1h'})
               res.status(200).json({
                token 
              });
            } else {
              return res.status(400).json({
                message: "Invalid password !",
              });
            }
          } else {
            return res.status(400).json({ message: "Something went wrong" });
          }
        });
      }

  
};