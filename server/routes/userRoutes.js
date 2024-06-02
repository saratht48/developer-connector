const express=require('express')
const { register, login, addProfile,getAllProfiles } = require('../controllers/userController')
const { protect } = require('../middleware/auth')
const userRouter=express.Router()
userRouter.route('/register').post(register)
userRouter.route('/login').post(login)
userRouter.route('/updateProfile').post(protect,addProfile)
userRouter.route('/getAllProfiles').get(getAllProfiles)

module.exports=userRouter