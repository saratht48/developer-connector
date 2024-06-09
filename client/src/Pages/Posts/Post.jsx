import Button from "../../Components/Common/Button"
import { useDispatch } from "react-redux"

const Post=({post,setPopup,setDeleteid})=>{
    const dispatch=useDispatch()
    const fnDeletePost=()=>{
        setPopup(true)
        setDeleteid(post._id)
        // const deletepost={
        //     _id:post._id
        // }
        // dispatch(deletepost(deletepost))
    }
    return(
        <div className="post-wrapper">
           <div className="image-wrapper">
            <img src={post.image}/>
            <p className="post-name">{post.name}</p>
           </div>
           <div className="description-wrapper">
            <p>{post.description}</p>
            <p>Posted on {post.postedDate}</p>
            <Button value="Delete" onClick={fnDeletePost}/>
           </div>
        </div>
    )
}
export default Post