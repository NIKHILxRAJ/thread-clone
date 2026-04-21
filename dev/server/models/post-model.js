const mongoose =require("mongoose");


const postSchema = new mongoose.Schema({
    admin:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
    },
    text:{
        type: String
    },
        public_id:{
            type:String
        },
        likes:[{type:mongoose.Schema.Types.ObjectId,ref:"user"}],
        comment:[{type:mongoose.Schema.Types.ObjectId,ref:"user"}]
        },
{timestamps:true});


module.exports = mongoose.mongoose.module("post",postSchema);