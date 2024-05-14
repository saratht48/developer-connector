const express=require('express');
const { getAllPosts, getAllCommentsOfMyPost, createPost, deletePost, addComment, likePost } = require('../controllers/postController');
const { protect } = require('../middleware/auth');
const postRouter=express.Router()
postRouter.route('/').get(protect,getAllPosts).post(protect,createPost).delete(protect,deletePost)
postRouter.route('/postId').get(protect,getAllCommentsOfMyPost)
postRouter.route('/comments').post(protect,addComment)
postRouter.route('/likes').post(protect,likePost)

module.exports=postRouter

