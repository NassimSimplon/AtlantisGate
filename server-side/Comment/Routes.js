const express = require('express')
const router = express.Router()
 const Comment = require('./Controller');

 // add Comment 
 router.post('/Comment/add',Comment.addComment)
 // get all Comments
 router.get('/Comments/getAll',Comment.getAllComments)
 //delete Comment
 router.delete('/Comment/delete/:id',Comment.deleteComment)
 //update Comment 
 router.put('/Comment/update/:id',Comment.updateComment)
 // get one Comment
 router.get('/Comment/get/:id',Comment.getComment)

 //Router
 module.exports = router