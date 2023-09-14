import mongoose from "mongoose";

const{Schema} =mongoose;
const postSchema= new Schema({

    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    username: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    
},{timestamps:true});

mongoose.models={};


const Post = mongoose.model.Post|| mongoose.model("Post",postSchema);

export default Post