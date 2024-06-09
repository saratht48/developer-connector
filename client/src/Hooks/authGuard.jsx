import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

const UserAuthGuard=({children})=>{
    const {user}=useSelector((state)=>state.auth)
    return  user?<>{children}</>:<Navigate to='/login'/>
}
export default UserAuthGuard