import {Routes,Route} from 'react-router-dom'
import React from 'react'
import Posts from './Pages/Posts/Posts'
import UserAuthGuard from './Hooks/authGuard'
const ProfileDetail=React.lazy(()=>import('./Pages/ProfileDetail/ProfileDetail'))
const CreateProfile=React.lazy(()=>import('./Pages/Dashboard/CreateProfile'))
const AddExperience=React.lazy(()=>import('./Pages/Dashboard/AddExperience'))
const Dashboard =React.lazy(()=>import('./Pages/Dashboard/Dashboard'))
const Login =React.lazy(()=>import('./Pages/Login/Login'))
const Register=React.lazy(()=>import('./Pages/Register/Register'))
const Index=React.lazy(()=>import("./Pages/Home/Index"))
const Profile=React.lazy(()=>import("./Pages/Profile/Profile"))
const CustomRouter=()=>{

    return(
        <Routes>
            <Route element={<Index/>} path='/'></Route>
            <Route element={<Profile/>} path='/profile'></Route>
            <Route element={<UserAuthGuard><ProfileDetail/></UserAuthGuard>} path='/profiledetail'></Route>
            <Route element={<Register/>} path='/register'></Route>
            <Route element={<Login/>} path='/login'></Route>
            <Route element={<Dashboard/>} path='/dashboard'></Route>
            <Route element={<UserAuthGuard><CreateProfile/></UserAuthGuard>} path='/createprofile'></Route>
            <Route element={<UserAuthGuard><AddExperience/></UserAuthGuard>} path='/addexperience'></Route>
            <Route element={<UserAuthGuard><Posts/></UserAuthGuard>} path='/posts'></Route>
        </Routes>
    )
}

export default CustomRouter