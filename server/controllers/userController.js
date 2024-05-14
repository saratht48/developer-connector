const mongoose=require('mongoose')
const {assyncErrorHandler, CustomError}=require('../utils/erroHandling')
const User = require('../models/userModel')
const createToken = require('../utils/jwt')
const Profile = require('../models/profileModel')
const Post = require('../models/PostModel')
const  register=assyncErrorHandler(async(req,res,next)=>{
     const {name,email,password,imageUrl}=req.body
     if(!email || !password || !name){
        const error=new CustomError('fill all fields')
        next(error)
     }
    const existingUser=await User.findOne({email})
    if(existingUser){
        const error=new CustomError('user already exist')
        next(error)
    }
      const user=await User.create({
        name,
        email,
        password,
        imageUrl
      })
      if(user){
        res.status(201).json({
            status:'success',
            data:{
              user:user,
                token:createToken({
                    _id:user._id,
                    name: user.name,
                    password: user.password,
                    email: user.email,
                    isAdmin:user.isAdmin,
                })
            }
        })
      }


})


const login=assyncErrorHandler(async(req,res,next)=>{
    const {email,password}=req.body
    if(!email || !password){
       const error=new CustomError('fill all fields')
       next(error)
    }
    const existingUser=await User.findOne({email})
    if(existingUser && existingUser.password==password){
        res.status(200).json({
            status:'success',
            data:{
                user:existingUser,
                token:createToken({
                    _id:existingUser._id,
                    name: existingUser.name,
                    password: existingUser.password,
                    email: existingUser.email,
                    isAdmin:existingUser.isAdmin,
                })
            }
        })
    }else{
        const error=new CustomError('invalid user')
       next(error)
    }

})

const addProfile =assyncErrorHandler(async(req,res,next)=>{
      console.log(req.body)
     console.log(req.body._id,req.user._id,'lllllllllllll')
      if(req.body._id!==req.user._id){
        const error=new CustomError('you are not unauthorized to perform this task',401)
        next(error)
      }
      let profile;
      const didProfileExist =await Profile.find({user:req.body._id})
      if(didProfileExist){
          profile=await Profile.findByIdAndUpdate(req.body._id,req.body,{new:true})
      }else{
         profile=await Profile.create(req.body)
      }
      if(profile){
        res.status(201).json({
            status:'success',
                        data:{
                           profile
                        }
        })
      }
})

const getAllProfiles=assyncErrorHandler(async(req,res)=>{
    const profiles=await Profile.find()
            res.status(200).json({
                status:'success',
                data:{
                    profiles
                }
            })
        
})


module.exports={
    login,
    register,
    addProfile,
    getAllProfiles
}
