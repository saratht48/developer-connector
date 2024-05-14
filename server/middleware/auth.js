const { CustomError } = require("../utils/erroHandling")
const jwt=require("jsonwebtoken")
exports.protect=(req,res,next) => {
   
if(req.headers && req.headers.authorization && req.headers.authorization.includes('Bearer'))  {
    console.log('1')
    const token=req.headers.authorization.split(' ')[1]
    if(token){
        console.log('2')
        const decoded=jwt.verify(token,'12345')
        console.log(decoded,'decoded-obj')
        req.user=decoded
        next()
    }else{
        console.log('3')
        const error=new CustomError('unauthorized',401)
        next(error)
    }
}
else{
    console.log('4')
    const error=new CustomError('unauthorized',401)
    next(error)
}
}