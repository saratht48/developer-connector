import axios from "axios"

const API_URL='http://localhost:7000/api/v1/users'
// register
const register=async (userData)=>{
    const response= await axios.post(API_URL+'/register',userData)
    // if(response.data.data.user){
    //     localStorage.setItem('token',JSON.stringify(response.data.data.token))
    // }
    return response.data.data.user
}
//login
const login=async (userData)=>{
    const response= await axios.post(API_URL+'/login',userData)
    
    if(response.data.data.user){
        localStorage.setItem('token',JSON.stringify(response.data.data.token))
        console.log(JSON.parse(localStorage.getItem("token")))
    }
    return response.data
}


// import api from '../../Intercepter/Intercepter'
// const API_URL='/users/';
// const register = async (userData) => {
//     debugger
//     const response = await api.get(API_URL+'/register',userData);
//     if(response.data.data.user){
//         localStorage.setItem('user',JSON.stringify(response.data.data.user))
//     }
//     return response.data.data.user
// };

// const login = async (userData) => {
//     console.log(API_URL)
//     const response = await api.get(API_URL+'/login',userData);
//     if(response.data){
//         localStorage.setItem('user',JSON.stringify(response.data))
//     }
//     return response.data.data.user
// };

const authService={
    register,
    login
}
export default authService