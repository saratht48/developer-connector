import { useDispatch } from 'react-redux'
import Button from '../../Components/Common/Button'
import './index.css'
import { deletePost } from '../../feature/Posts/postSlice'
const ConfirmationPopup=({deleteid,setPopup})=>{
    const dispatch=useDispatch()
    const fnConfirmDelete=()=>{
        setPopup(false)
        dispatch(deletePost({
            id:deleteid
        }))
    }
    return(
        <div className="outer-popup">
            <div className="popup-cover">
                <span>Are you sure</span>
                <Button value="Ok" onClick={fnConfirmDelete}/>
            </div>
        </div>
    )
}

export default ConfirmationPopup