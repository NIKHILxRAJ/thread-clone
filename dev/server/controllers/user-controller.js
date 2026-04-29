const User = require("../models/user-models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.signin = async (req, res) => {
  try {
    const { userName, email, password } = req.body;
    if (!userName || !email || !password) {
      return res.status(400).json({
        msg: "userName ,email,password are required ! ",
      });
    }

    const userExists = await User.findOne({ email });
    if (userExists) {
      return res
        .status(400)
        .json({ msg: "User is already registered ! Please Login . " });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    if (!hashedPassword) {
      return res.status(400).json({ msg: "Error in password hashing ! " });
    }
    const user = new User({
      userName,
      email,
      password: hashedPassword,
    });
    const result = await user.save();
    if (!result) {
      return res.status(400).json({ msg: "Error while saving user ! " });
    }
    const accesToken = jwt.sign({ token: result._id }, process.env.JWT_SECRET, {
      expiresIn: "30d",
    });
    if (!accesToken) {
      return res
        .status(400)
        .json({ msg: "Error  while generating the token ! " });
    }
    res.cookie("token", accesToken, {
      maxAge: 1000 * 60 * 60 * 24 * 30,
      httpOnly: true,
      sameSite: "none",
      secure: true,
    });
    res.status(201).json({ msg: `User Signed in successfully ! hello ${result?.userName}` });
  } catch (err) {
    res.status(400).json({
      msg: "Error in signin !!",
      err: err.message,
    });
  }
};
