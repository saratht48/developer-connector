import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import authService from "./authService"
const user=JSON.parse(localStorage.getItem('user'))
const initialState={
    user:user?user:null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

//register
export const register=createAsyncThunk('auth/register',async(user,thunkAPI)=>{
    try{
        return await authService.register(user)
    }
    catch(e){
        const message= (e.response && e.response.data && e.response.data.message) || e.message || e.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

//login
export const login=createAsyncThunk('auth/login',async(user,thunkAPI)=>{
    try{
        return await authService.login(user)
    }
    catch(e){
        const message= (e.response && e.response.data && e.response.data.message) || e.message || e.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

export const authSlice=createSlice(
    {
        name:'auth',
        initialState,
        reducers:{
            reset: (state)=>{
                state.isError=false
                state.isSuccess=false
                state.isLoading=false
                state.message=''
            },
            logout:(state)=>{
                state.user=null
                localStorage.removeItem('user')
            }
        },
        extraReducers:(builder)=>{
            builder
            .addCase(register.pending,(state)=>{
                state.isLoading=true
            })
            .addCase(register.fulfilled,(state,action)=>{
                state.isLoading=false
                state.isSuccess=true
                // state.user=action.payload
                const userobj={
                    id: action.payload.user._id,
                    email: action.payload.user.email,
                    isAdmin: action.payload.user.isAdmin,
                    name: action.payload.user.name,
                }
                localStorage.setItem('user',JSON.stringify(userobj))
                state.user=userobj
            })
            .addCase(register.rejected,(state,action)=>{
                state.isLoading=false
                state.user=null
                state.isError=true
                state.message=action.payload

            })
            .addCase(login.pending,(state)=>{
                state.isLoading=true
            })
            .addCase(login.fulfilled,(state,action)=>{
                state.isLoading=false
                state.isSuccess=true
                console.log(action.payload,'kkkkkk')

                const userobj={
                    id: action.payload.data.user._id,
                    email: action.payload.data.user.email,
                    isAdmin: action.payload.data.user.isAdmin,
                    name: action.payload.data.user.name,
                }
                localStorage.setItem('user',JSON.stringify(userobj))
                state.user=userobj
            })
            .addCase(login.rejected,(state,action)=>{
                state.isLoading=false
                state.user=null
                state.isError=true
                state.message=action.payload

            })
        }
    }
)

export const {reset,logout}=authSlice.actions
export default authSlice.reducer