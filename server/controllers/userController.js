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
     console.log(req.body.user,req.user._id,'lllllllllllll')
      if(req.body.user!==req.user._id){
        const error=new CustomError('you are not unauthorized to perform this task',401)
        next(error)
      }
      let profile;
      const didProfileExist =await Profile.findOne({user:req.body.user})
      console.log(didProfileExist,'profile exist')
      if(didProfileExist){
          profile=await Profile.findByIdAndUpdate(didProfileExist._id,req.body,{new:true})
          console.log('profile update',profile)
      }else{
         profile=await Profile.create(req.body)
         console.log('profile creat',profile)
      }
      if(profile){
        console.log('entered profile',profile)
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

const getMyProfile=assyncErrorHandler(async(req,res,next)=>{
      const id=req.user._id
      console.log(id)
      const profile=await Profile.findOne({user:id})
      console.log(profile,'profile')
      if(profile){
           res.status(200).json({
              status:"sucesss",
              data:profile
           })
      }else{
        res.status(200).json({
            status:"sucesss",
            data:'no profile found'
         })
      }
        
})


module.exports={
    login,
    register,
    addProfile,
    getAllProfiles,
    getMyProfile
}
