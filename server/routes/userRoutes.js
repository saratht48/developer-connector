const express=require('express')
const { register, login, addProfile } = require('../controllers/userController')
const { protect } = require('../middleware/auth')
const userRouter=express.Router()
userRouter.route('/register').post(register)
userRouter.route('/login').post(login)
userRouter.route('/updateProfile').post(protect,addProfile)
module.exports=userRouter