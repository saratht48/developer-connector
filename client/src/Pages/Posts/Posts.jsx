import { useEffect, useState } from "react"
import { RiAccountBoxFill } from "react-icons/ri"
import Button from '../../Components/Common/Button'
import './index.css'
import Post from "./Post"
// import { createPosts, getAllPosts } from "../../feature/Posts/postSlice"
import { useDispatch, useSelector } from "react-redux"
import ConfirmationPopup from "./ConfirmationPopup"
import { createPosts, getAllPosts } from "../../feature/Blogs/blogSlice"

const Posts=()=>{
    const [mypost,setMypost]=useState('')
    const {posts,isLoading,isError,message}=useSelector((state)=>state.blog)

    const {user}=useSelector((state)=>state.auth)
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(getAllPosts())
    },[])
  
    const fnSubmit=(e)=>{
        e.preventDefault()
        const userId=user.id
        const postObj={
            _id:userId,
            description:mypost
        }
        dispatch(createPosts(postObj))
    }
    const[popup,setPopup]=useState(false)
    const [deleteid,setDeleteid]=useState('')
    return(
       <>
        <div className="container">
            <h1 className="teal">Posts</h1>
            <h2 className="title"> <RiAccountBoxFill/> Welcome to the community</h2>
            <h3 className="blue-btn">Say Something ...</h3>
            <form onSubmit={fnSubmit}>
                <textarea value={mypost} name="mypost" rows="4" placeholder="Create a post" onChange={(e)=>setMypost(e.target.value)}/>
                <Button value="Submit"/>
            </form>

            <div>
                {
                    posts?.map((post,index)=>
                        <Post post={post} setPopup={setPopup} setDeleteid={setDeleteid} key={index}/>
                    )
                }
            </div>
        </div>
        {
            popup && <ConfirmationPopup deleteid={deleteid} setPopup={setPopup}/>
        }
       </>
    )
}

export default Posts