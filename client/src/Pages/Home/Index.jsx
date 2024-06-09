import { useNavigate } from 'react-router-dom'
import Button from '../../Components/Common/Button'
import './Index.css'
import { useSelector } from 'react-redux'
const Index=()=>{
    const navigate=useNavigate()
    const fnGotoLogin=()=>{
        navigate('/login')
    }
    const fnGotoSignUp=()=>{
        navigate('/register')
    }
    const {posts}=useSelector((state)=>state.blog)

    return(
        <div className='home-wrapper'>
            <div className='text-wrapper'>
                <h1>Developer Connector {posts}</h1>
                <p>Create a developer profile/portfolio,share posts and get help from other developers</p>
                <div className='btn-wrapper'>
                <Button value='Sign Up' className='blue-btn' onClick={fnGotoSignUp}/>
                <Button value='Login' className='white-btn' onClick={fnGotoLogin}/>
                </div>
            </div>
        </div>
    )
}

export default Index