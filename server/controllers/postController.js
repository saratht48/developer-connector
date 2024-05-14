
const Post=require('../models/PostModel')
const Comment=require('../models/commentModel')
const {assyncErrorHandler, CustomError}=require('../utils/erroHandling')
const getAllPosts=assyncErrorHandler(async(req,res)=>{
    const posts=await Post.find()
    res.status(200).json({
     status:'success',
     data:{
         posts
     }
 })
})
const createPost=assyncErrorHandler(async(req,res,next)=>{
    const {_id,description}=req.body
    if(!_id || !description){
        const error=new CustomError('please give id and postcontent',400)
        next(error)
    }
     const post=await Post.create(req.body)
        if(post){
            res.status(201).json({
                status:'success',
                data:{
                    post
                }
            })
        }
    
})

const deletePost=assyncErrorHandler(async(req,res,next)=>{
    const {_id}=req.body
    if(_id!==req.user._id){
        const error=new CustomError('you dont have permission for this action',400)
        next(error)
    }
    if(!_id){
        const error=new CustomError('please give id',400)
        next(error)
    }

    const post=await Post.findByIdAndDelete(_id)
    if(post){
        res.status(200).json({
            status:'successfully deleted the post',
            data:{
                post
            }
        })
    }
})
 const addComment=assyncErrorHandler(async(req,res,next)=>{
    const postId=req.body.post;
    if(req.user._id!==req.body.user){
        const error=new CustomError('you dont have permission for this action',400)
        next(error)
    }
    const comment=await Comment.create(req.body)
    if(comment){
        res.status(201).json({
            status:'success',
            data:{
                comment
            }
        })
    }
 })
const getAllCommentsOfMyPost=assyncErrorHandler(async(req,res,next)=>{
    const postId=req.params.postId;
    const post=await Post.find({_id:postId})
    if(post.user!==req.user._id){
        const error=new CustomError('no permission for this action for you',400)
        next(error)
    }
    const comments=await Comment.find({post:postId})
    res.status(200).json({
        status:'success',
                data:{
                    comments
                }
    })


})
module.exports={
    getAllPosts,
    createPost,
    deletePost,
    getAllCommentsOfMyPost,
    addComment
}