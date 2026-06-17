const User = require("../models/user-models");
const jwt = require("jsonwebtoken");

const auth = async (req, res) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.status(400).json({ msg: "No token is auth !" });
    }
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    if (!decodedToken) {
      return res.status(400).json({ msg: "Error while decoding in auth !" });
    }

    const user = await User.findById(decodedToken.token)
      .populate("followers")
      .populate("threads")
      .populate("replies")
      .populate("repost");


      if(!user)
      {
        return res.status(400).json({msg:'No user found !'});
      }
  } catch (err) {
    res.status(400).json({ msg: "Error in auth !", err: err.message });
  }
};
