const { CustomError } = require("../utils/erroHandling")
const jwt=require("jsonwebtoken")
exports.protect=(req,res,next) => {
   
if(req.headers && req.headers.authorization && req.headers.authorization.includes('Bearer'))  {
    const token=req.headers.authorization.split(' ')[1]
    if(token){
        const decoded=jwt.verify(token,'12345')
        console.log(decoded,'decoded-obj')
        req.user=decoded
        next()
    }else{
        const error=new CustomError('unauthorized',401)
        next(error)
    }
}
else{
    const error=new CustomError('unauthorized',401)
    next(error)
}
}