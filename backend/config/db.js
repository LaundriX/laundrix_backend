const mongoose = require("mongoose");
const connectDb = async () => {
  try {
    conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(` connected ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1); // used to end a running process in nodeJS, 1 is for end with  failure and 0 for without failure
  }
};

module.exports = connectDb;
