const mongoose = require("mongoose");

const connection = mongoose
  .connect(
    "mongodb+srv://bibekgh34:recipez34@cluster0.lpqfsi9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: "recipez",
    }
  )
  .then(console.log("Database connected"))
  .catch((error) => {
    console.log(`Failed due to ${error}`);
  });

module.exports = connection;
