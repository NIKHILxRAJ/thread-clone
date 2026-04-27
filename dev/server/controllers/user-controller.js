const User = require('../models/user-models');
const bcrypt = require("bcrypt");


exports.signin = async (req, res) => {
    try {

        const { username, email, password } = req.body;
        if(!username || !email||!password){
           return  res.status(400).json({
            msg:"username ,email,password are required ! "});
        }

        const userExists=await User.findOne({email});
        if(userExists ){
            return res
            .status(400)
            .json(msg:"User is already registered ! Please Login . ")
        }
        const hashedPassword = await bcrypt.hash(password,10);
        if(!hashedPassword){
           return  res.status(400).json({msg:"Error in password hashing ! "});

        }
        const user = new User()({
            user
        })
       //res.status(200).json(req.body);
    }
    catch (err) {

        res.status(400).json({
            msg: 'Error in signin !!',
            err: err.message
        });
    }
};