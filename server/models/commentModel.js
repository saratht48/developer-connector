const mongoose=require('mongoose')
const schema=new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    post:{
        type:mongoose.Schema.Types.ObjectId,
        ref: "Post"
    },
    description:{
        type:String,
        require:[true,'description must be there']
    },
    commentededDate:{
        type:Date,
         default:Date.now()
    },
},{
    timestamps:true
})
const Comment=mongoose.model('Comment',schema)
module.exports=Comment