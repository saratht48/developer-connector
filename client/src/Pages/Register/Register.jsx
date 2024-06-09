import { RiAccountCircleFill } from "react-icons/ri";
import Input from "../../Components/Common/Input";
import { useEffect, useState } from "react";
import Button from "../../Components/Common/Button";
import './register.css'
import { useDispatch, useSelector } from "react-redux";
import { register, reset } from "../../feature/Auth/authSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const Register=()=>{
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const [userData,setUserData]=useState({
        name:'',
        email:'',
        password:'',
        confirmpassword:''
    })
    const {name,email,password,confirmpassword}=userData
    const handleInputChange=(e)=>{
        setUserData(
            {...userData,[e.target.name]:e.target.value}
        )
    }
    const {user,isLoading,isSuccess,message,isError}=useSelector((state)=>state.auth)
    const [errorData,setErrorData]=useState({
        hasErrorInname:false,
        hasErrorInemail:false,
        hasErrorInpassword:false,
        hasErrorInconfirmpassword:false,
    })
    const {hasErrorInemail,hasErrorInname,hasErrorInpassword,hasErrorInconfirmpassword}=errorData
    useEffect(()=>{
        if(isError){
            toast(message)
            console.log(message)
        }
        if(isSuccess || user){
            navigate('/')
        }
        dispatch(reset())
    },[isError,isSuccess,message,user,dispatch,navigate])
    const fnHandleSubmit=(e)=>{
        e.preventDefault()
        //error checking
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const newobj={...errorData}
        newobj.hasErrorInname=name.length===0
        newobj.hasErrorInemail=email.length===0 || (!emailRegex.test(email))
        newobj.hasErrorInpassword=password.length==0
        newobj.hasErrorInconfirmpassword=password !==confirmpassword
        setErrorData(newobj)
        const userdata=Object.values(newobj)

        const result=userdata.some((item,index)=>item===true)

        if(!result){
            const myobj={
                name,
                email,
                password
            }
            dispatch(register(myobj))
        }
    }
    const handleErrorChange=(e)=>{
        const {name}=e.target
        setErrorData({...errorData,[`hasErrorIn${name}`]:false})
    }
    return(
        <div className="container">
            <form onSubmit={fnHandleSubmit}>
            <h1 className="teal">Sign Up</h1>
            <h3 className="register-title"><RiAccountCircleFill/> Create Your Account</h3>
            <Input name="name" value={name} placeholder="Name" onChange={handleInputChange} type="text" className={hasErrorInname?'error':'input'} onFocus={handleErrorChange}/>
            <Input name="email" value={email} placeholder="Email Address" onChange={handleInputChange} type="text" className={hasErrorInemail?'error':'input'} onFocus={handleErrorChange}/>
            <label>This site uses a Gravatar so if you want a profile image, use a Gravatar email</label>
            <Input name="password" value={password} placeholder="Password" onChange={handleInputChange} type="password" className={hasErrorInpassword?'error':'input'} onFocus={handleErrorChange}/>
            <Input name="confirmpassword" value={confirmpassword} placeholder="Confirm Password" onChange={handleInputChange} type="password" className={hasErrorInconfirmpassword?'error':'input'} onFocus={handleErrorChange}/>
            <Button value="Register" className="blue-btn reg-btn"/>
            <p>Already have an account? <span>Sign In</span></p>
            </form>
        </div>
    )
}

export default Register