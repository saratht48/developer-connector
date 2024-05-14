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
      active:{
        type:Boolean,
        default:true
      },
    likededDate:{
        type:Date,
         default:Date.now()
    },
},{
    timestamps:true
})
const Like=mongoose.model('Like',schema)
module.exports=Like