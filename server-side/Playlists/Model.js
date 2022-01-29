const mongoose = require("mongoose");
const Schema = mongoose.Schema;
module.exports = mongoose.model(
  "playlists",
  new Schema({
    playlist: [
    {
      image:{type: String},
        video: {
          type: String,
        },
      title:{type:String},
        description: {
          type: String,
        }
        
      }
    ]
  })
);