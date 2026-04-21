const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema(
  {
    admin: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
    post: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
    text: {
      type: String,
    },
  },
  { timestamps: true },
);

models.export = mongoose.model("comment", commentSchema);
