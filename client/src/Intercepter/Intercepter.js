import axios from 'axios';
import {store} from '../app/store'
import { logout } from '../feature/Auth/authSlice';
import { baseURL } from '../Constants/apiurl';


// Create an Axios instance
const api = axios.create({
    // baseURL: 'http://localhost:7000/api/v1', // Set your base URL here
    baseURL:baseURL
});


// Add a request interceptor
api.interceptors.request.use(
    (config) => {
        // Retrieve the token from localStorage (or wherever you store it)
        
        const token=JSON.parse(localStorage.getItem("token"))
        console.log(JSON.parse(localStorage.getItem("token")),'kkkk')
        if (token) {
            config.headers = {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${token}`
            }
        }
        return config;
    },
    (error) => {
        console.log('error',error)
        return Promise.reject(error);
    }
);


// Add a response interceptor
api.interceptors.response.use(
    (response) => {
        // Return the response if everything is fine
        return response;
    },
    (error) => {
        // Check if the error response is due to an expired token
        console.log(error,'error')
        console.log(error.response,'error response')
        if ((error.response.data.message==="token is not present" || error.response.data.message==="acess denied") && error.response.status === 403) {
            store.dispatch(logout());
        }
        return Promise.reject(error);
    }
);

export default api