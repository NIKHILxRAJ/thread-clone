const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      require: true,
      trim: true,
    },
    email: {
      type: String,
      require: true,
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      select: false,
    },
    bio: {
      type: Srting,
    },
    profilePic: {
      type: String,
      default:
        "https://www.pngitem.com/pimgs/m/214-2145309_blank-profile-picture-circle-hd-png-download.png",
    },
    public_id: {
      type: String,
    },
    followers: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
      },
    ],
    threads: [{ type: mongoose.Schema.Types.ObjectId, ref: "Post" }],
    replies: [{ type: mongoose.Schema.Types.ObjectId, ref: "commnet " }],
    threads: [{ type: mongoose.Schema.Types.ObjectId, ref: "Post" }],
  },
  { timestamps: true },
);

module.exports = mongoose.model("user", userSchema);
