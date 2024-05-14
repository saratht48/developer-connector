const mongoose=require('mongoose')
const schema=new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
 skills:[
    {
        type:String
    }
 ],
 esperience:[
    {
        designation:{
            type:String
        },
        fromDate:{
            type:Date
        },
        toDate:{
            type:Date,
        },
        isCurrentJob:{
            type:Boolean,
            default:false
        }
    }
 ],
 education:[
    {
        designation:{
            type:String
        },
        fromDate:{
            type:Date
        },
        toDate:{
            type:Date,
        },
    }
 ],
 currentRole:{
    type:String,
    require:[true,'currentRole must be there']
 },
 description:{
    type:String,
    require:[true,'description must be there']
 },
adress:{
    type:String,
    require:[true,'city and state must be mentioned must be there']
}
},{
    timestamps:true
})
const Profile=mongoose.model('Profile',schema)
module.exports=Profile