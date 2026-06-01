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
    res
      .status(201)
      .json({ msg: `User Signed in successfully ! hello ${result?.userName}` });
  } catch (err) {
    res.status(400).json({
      msg: "Error in signin !!",
      err: err.message,
    });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ msg: "Email and are required !" });
    }
    const userExists = await User.findOne({ email });
    if (!userExists) {
      return res.status(400).json({ msg: "please Signin first ! " });
    }
    const passwordMatch = await bcrypt.compare(password, userExists.password);

    if (!passwordMatch) {
      return res.status(400).json({ msg: "Incorrect credentials ! " });
    }
    const accesToken = jwt.sign(
      {
        token: userExists._id,
      },
      process.env.JWT_SECRET,
      { expiresIn: "30d" },
    );
    if (!accesToken) {
      res.status(400).json({ msg: "Token not generated in login ! " });
    }
    res.cookie("token", accesToken, {
      maxAge: 1000 * 60 * 60 * 24 * 30,
      httpOnly: true,
      secure: true,
      sameSite: "none",
    });
    res.status(200).json({ msg: "User logged in successfully" });
  } catch (err) {
    res.status(400).json({ msg: "Error in login ! ", err: err.message });
  }
};

exports.userDetails = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res
        .status(400)
        .json({ msg: "Error in userDetails ! ", err: err.message });
    }
    const user = await User.findById(id)
      .select("-password")
      .populate("followers")
      .populate("replies")
      .populate({
        path: "threads",
        populate: [{ path: "likes" }, { path: "commnets" }, { path: "admin " }],
      })
      .populate({ path: "replies", populate: { path: "admin  " } })
      .populate({
        path: "reposts",
        populate: [
          { path: "likes  " },
          { path: "commnents" },
          { path: "admin" },
        ],
      });
    res.ststus(200).json({ msg: "User Details Fetched ! " ,user});
  } catch (err) {
    res.status(400).json({ msg: "Error in userDetails ! ", err: err.message });
  }
};


exports.followUser = async(req,res)=>
{
  try{
    const {id} = req.params;
    if(!id)
    {
       return res.status(400).json({msg:"Id is required !"});
    }
    const userExists = await User.findById(id);
    if(!userExists)
    {
      return res.status(400).json({msg:"User don`t Exist !"});

    }
    if(userExists.followers.includes(req.user._id)){
      await User.findByIdAndUpdate(
        userExists._id,
        {
        $pull:{followers:req.user._id},
        },
      {
        new :true}
      );
      return res.status(201).json({msg:`unfollowed ${userExists.userName}`});
    }
    await User.findByIdAndUpdate(
        userExists._id,
        {
        $push:{followers:req.user._id},
        },
      {
        new :true}
      );
      return res.status(201).json({msg:`Following ${userExists.userName}`});
    

  }
  catch(err)
  {
    res.status(400).json({msg:"Error in followers !",err:err.message});
  }
}





