const mongoose=require('mongoose')
const schema=new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    description:{
        type:String,
        require:[true,'description must be there']
    },
    postedDate:{
        type:Date,
         default:Date.now()
    },
},{
    timestamps:true
})
const Post=mongoose.model('Post',schema)
module.exports=Post