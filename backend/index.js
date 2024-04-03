const express = require("express");

var app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Major Imports
const database = require("./database/connection");
const user = require("./routes/userRoutes");

app.use("/user", user);

app.listen(5000, () => {
  console.log(`Server running on 5000`);
});
