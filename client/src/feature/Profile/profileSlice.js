import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import ProfileService from "./profileService"


const initialState={
    profile:null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

//create profile
export const createProfile=createAsyncThunk('profile/createProfile',async(profileData,thunkAPI)=>{
    try{
        return await ProfileService.createProfile(profileData)
    }
    catch(e){
        const message= (e.response && e.response.data && e.response.data.message) || e.message || e.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

//create profile
export const getProfile=createAsyncThunk('profile/getProfile',async(thunkAPI)=>{
    try{
        return await ProfileService.getProfile()
    }
    catch(e){
        const message= (e.response && e.response.data && e.response.data.message) || e.message || e.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

export const profileSlice=createSlice(
{
    name:'profile',
    initialState,
    reducers:{
        reset: (state)=>{
            state.isError=false
            state.isSuccess=false
            state.isLoading=false
            state.message=''
        },
    },
    extraReducers:(builder)=>{
        builder
        .addCase(createProfile.pending,(state)=>{
            state.isLoading=true
        })
        .addCase(createProfile.fulfilled,(state,action)=>{
            state.isLoading=false
            state.isSuccess=true
            state.profile=action.payload
        })
        .addCase(createProfile.rejected,(state,action)=>{
            state.isLoading=false
            state.profile=null
            state.isError=true
            state.message=action.payload

        })
        .addCase(getProfile.pending,(state)=>{
            state.isLoading=true
        })
        .addCase(getProfile.fulfilled,(state,action)=>{
            state.isLoading=false
            state.isSuccess=true
            state.profile=action.payload
        })
        .addCase(getProfile.rejected,(state,action)=>{
            state.isLoading=false
            state.profile=null
            state.isError=true
            state.message=action.payload

        })
    }
}
)

export const {reset}=profileSlice.actions
export default profileSlice.reducer