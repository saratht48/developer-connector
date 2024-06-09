const express=require('express')
const { register, login, addProfile,getMyProfile } = require('../controllers/userController')
const { protect } = require('../middleware/auth')
const userRouter=express.Router()
userRouter.route('/register').post(register)
userRouter.route('/login').post(login)
userRouter.route('/updateProfile').post(protect,addProfile)
userRouter.get('/myprofile',protect,getMyProfile)
module.exports=userRouter