const mongoose=require('mongoose')
const schema=new mongoose.Schema({
    name:{
        type:String,
        require:[true,'name must be there']
    },
    isAdmin:{
        type:Boolean,
        default:false
    },
    email:{
        type:String,
        require:[true,'email must be there']
    },
    password:{
        type:String,
        require:[true,'password must be there']
    },
   lastPassworUpdatedTime:{
    type:Number,
   },
   imageUrl:{
    type:String
   }
},{
    timestamps:true
})
const User=mongoose.model('User',schema)
module.exports=User