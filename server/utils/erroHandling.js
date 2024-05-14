const assyncErrorHandler=(func)=>{
    return (req,res,next)=>{
        func(req,res,next).catch(err=>next(err))
    }
}
class CustomError extends Error{
    constructor(message,statusCode){
        super(message)
        this.message=message
        this.statusCode=statusCode
        this.isOperational=true
        
    }
}

module.exports={
    assyncErrorHandler,
    CustomError
}
