const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose.connect(process.env.DB_LOCAL_URI).then((con) => {
    console.log(`Mongodb database connected with Host: ${con.connection.port}`);
  });
};

module.exports = connectDatabase;
