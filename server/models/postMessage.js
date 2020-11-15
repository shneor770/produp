import mongoose from "mongoose";

var now     = new Date(); 
var year    = now.getFullYear();
var month   = now.getMonth()+1; 
var day     = now.getDate();
var hour    = now.getHours();
var minute  = now.getMinutes();
var second  = now.getSeconds(); 
var dateTime = year+'/'+month+'/'+day+' '+hour+':'+minute+':'+second;


const postSchema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: String,
        default: dateTime
    }

});






const PostMessage = mongoose.model('PostMessage', postSchema)


export default PostMessage;