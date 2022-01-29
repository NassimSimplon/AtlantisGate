const mongoose = require('mongoose');
const Schema = mongoose.Schema;
module.exports = mongoose.model('comment',new Schema({
 
    image:{
        type:String,
        required:true
    },
    fullName:{
        type:String,
        required:true
    },
    videoID:{
        type:String,
        required:true
    },
    comment:{
        type:String,
        required:true
    }
}))