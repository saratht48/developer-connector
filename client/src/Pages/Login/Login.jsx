import { useEffect, useState } from 'react'
import '../Register/register.css'
import { RiAccountBoxFill } from 'react-icons/ri'
import Input from '../../Components/Common/Input'
import Button from '../../Components/Common/Button'
import { login, reset } from '../../feature/Auth/authSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
const Login=()=>{
    const dispatch=useDispatch()
    const [userData,setUserData]=useState({
        email:'',
        password:'',
    })
    const {email,password}=userData
    const navigate=useNavigate()
    const {user,isLoading,isError,isSuccess,message}=useSelector((state)=>state.auth)

    const [errorData,setErrorData]=useState({
        hasErrorInname:false,
        hasErrorInpassword:false
    })
    const {hasErrorInemail,hasErrorInpassword}=errorData
    useEffect(()=>{
        if(isError){
            toast(message)
            console.log('error',message)
        }
        if(isSuccess || user){
            navigate('/')
        }
        dispatch(reset())
    },[isError,isSuccess,user,navigate,dispatch])

    const handleInputChange=(e)=>{
        setUserData(
            {...userData,[e.target.name]:e.target.value}
        )
    }
    const fnHandleSubmit=(e)=>{
        e.preventDefault()
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const errrObj={...errorData}
        errrObj.hasErrorInemail=email.length===0 || (!emailRegex.test(email))
        errrObj.hasErrorInpassword=password.length===0
        setErrorData(errrObj)

        const logindata=Object.values(errrObj)

        const result=logindata.some((item,index)=>item===true)
        if(!result){
            const loginData={
                email,
                password
            }

            dispatch(login(loginData))
        }
        else{
          toast('error')
        }
    }
    const handleErrorChange=(e)=>{
        const {name}=e.target
        setErrorData({...errorData,[`hasErrorIn${name}`]:false})
    }
    return(
        <div className="container">
        <form onSubmit={fnHandleSubmit}>
        <h1 className="teal">Sign In</h1>
        <h3 className="register-title"><RiAccountBoxFill/> Sign Into Your Account</h3>
        <Input name="email" value={email} placeholder="Email Address" onChange={handleInputChange} type="text" onFocus={handleErrorChange} className={hasErrorInemail?'error':'input'}/>
        <Input name="password" value={password} placeholder="Password" onChange={handleInputChange} type="password" onFocus={handleErrorChange} className={hasErrorInpassword?'error':'input'}/>
        <Button value="Login" className="blue-btn reg-btn"/>
        <p>Don't  have an account? <span>Sign Up</span></p>
        </form>
    </div>
    )
}

export default Login