const mongoose = require("mongoose");

const connectDB = async () => {
  mongoose.set("strictQuery", false);
  const conn = await mongoose.connect(
    "mongodb+srv://readyp:satusampailima@clusterfortesting.t9uslzy.mongodb.net/?retryWrites=true&w=majority"
  );
  console.log(`MongoDB connected: ${conn.connection.host.underline}`.blue.bold);
};

module.exports = connectDB;
