const router = require('express').Router();
//Controller
const  user = require('./authController');

 //Register
router.post('/user/register',user.register);
//Sign In
router.post('/user/signin',user.signIn);
 
//Router   
module.exports = router