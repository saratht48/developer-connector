import { configureStore } from "@reduxjs/toolkit";

import authReducer from '../feature/Auth/authSlice'
import blogSlice from "../feature/Blogs/blogSlice";
import profileSlice from "../feature/Profile/profileSlice";
import postSlice from "../feature/Posts/postSlice";

export const store=configureStore({
    reducer:{
        auth:authReducer,
        profile:profileSlice,
        blog:blogSlice
    }
})
