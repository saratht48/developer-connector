import { RiAccountBoxFill } from "react-icons/ri"
import Input from '../../Components/Common/Input'
import { useEffect, useState } from "react"
import Label from "../../Components/Common/Label"
import './Index.css'
import Button from "../../Components/Common/Button"
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { createProfile, getProfile } from "../../feature/Profile/profileSlice";
const CreateProfile=()=>{
    const[profileData,setProfileData]=useState([
        {
            role:'',
            city:'',
            skills:'',
            about:'',

        }
    ])
    const {user}=useSelector((state)=>state.auth)
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(getProfile())
    },[])
    const [roledata,setRoledata]=useState(
        ['Instructor or Teacher','Developer','Student']
    )
    const {role,city,skills,about}=profileData
    const [errorData,setErrorData]=useState(
        {
            hasErrorInrole:'',
            hasErrorIncity:'',
            hasErrorInabout:'',
        }
    )
    const {hasErrorInrole,hasErrorIncity,hasErrorInabout}=errorData
    const onChangeHandler=(e)=>{
        setProfileData(
            {
                ...profileData,[e.target.name]:e.target.value
            }
        )
    }
    const fnSubmitHandler=(e)=>{
        e.preventDefault()
        const errrObj={...errorData}
        errrObj.hasErrorInrole=role.length===0
        errrObj.hasErrorIncity=city.length===0
        errrObj.hasErrorInabout=about.length===0
        setErrorData(errrObj)

        const logindata=Object.values(errrObj)

        const result=logindata.some((item,index)=>item===true)

        if(!result){
            const skillset=skills.split(',')
            const profileData={
                user:user.id,
                skills:skillset,
                currentRole:role,
                description:about,
                adress:city
            }
            dispatch(createProfile(profileData))
        }
        else{
            if(errrObj.hasErrorInrole){
                toast("role is mandatory")
            }
            if(errrObj.hasErrorIncity){
                toast("city is mandatory")
            }
            if(errrObj.hasErrorInabout){
                toast("description is mandatory")
            }
        }    
    }
    const handleErrorChange=(e)=>{
        const {name}=e.target
        setErrorData({...errorData,[`hasErrorIn${name}`]:false})
    }
    return(
        <div className="container">
            <h2 className="teal">Create Your Profile</h2>
            <h2 className="title"> <RiAccountBoxFill/> Let's get some information to make your profile stand out</h2>
            <form onSubmit={fnSubmitHandler}>
                <select name="role" value={role} onChange={onChangeHandler} onFocus={handleErrorChange} className={hasErrorInrole?'error':'input'}>
                    <option value="">Select a role</option>
                    {
                        roledata.map((roles)=>
                            <option value={roles} key={roles}>{roles}</option>
                        )
                    }
                </select>
                <Label value="Give us an idea where you are at in your career" />

                <Input value={city} name="city" onChange={onChangeHandler} onFocus={handleErrorChange} className={hasErrorIncity?'error':'input'}/>
                <Label value="City and state suggestions (eg Buston, MA)"/>

                
                <Input value={skills} name="skills" onChange={onChangeHandler}/>
                <Label value="Please use comma seperate values"/>

                <textarea value={about} name="about" onChange={onChangeHandler} onFocus={handleErrorChange} className={hasErrorInabout?'error':'input'}/>
                <Label value="Tell us about yourself"/>

                <Button value="Save" className="bg-teal" type="submit"/>

            </form>
        </div>
    )
}
export default CreateProfile