const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

router.post("/register", (req, res) => {
  var { fullname, username, email, password } = req.body;
  User.findOne({ $or: [{ username: username }, { email: email }] })
    .then((user) => {
      if (user === null) {
        bcrypt.hash(password, 10).then((hash_pwd) => {
          const user = new User({
            fullname: fullname,
            username: username,
            email: email,
            password: hash_pwd,
          });
          user.save().then(() => {
            return res
              .status(200)
              .json({ msg: "User created successfully", success: true });
          });
        });
      } else {
        return res
          .status(400)
          .json({ msg: "Username or Email already exists", success: false });
      }
    })
    .catch((e) => {
      res
        .status(400)
        .json({ msg: "User creation failed", success: false, error: e });
    });
});

router.post("/login", (req, res) => {
  var { username, password } = req.body;
  User.findOne({ username: username })
    .then((user) => {
      if (user) {
        bcrypt.compare(password, user.password).then((result) => {
          if (result == true) {
            const token = jwt.sign({ nid: user._id }, "secretkey");
            return res.status(200).json({
              msg: "User login successful",
              token: token,
              success: true,
            });
          } else {
            return res
              .status(400)
              .json({ msg: "Invalid password", success: false });
          }
        });
      } else {
        return res
          .status(400)
          .json({ msg: "Invalid username", success: false });
      }
    })
    .catch((e) => {
      return res
        .status(400)
        .json({ msg: "User login failed", success: false, error: e });
    });
});

module.exports = router;
