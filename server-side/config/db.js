const mongoose = require("mongoose");
const db_connection = () => {
  mongoose
    .connect(
       'mongodb+srv://admin:admin@cluster0.q79uc.mongodb.net/atlantis?retryWrites=true&w=majority'
 

    )
    .then(() => {
      console.log("data_base connected");
    })
    .catch(() => {
      console.log("error bch tetarcheg");
    });
};
module.exports = db_connection;