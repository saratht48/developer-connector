import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import blogService from "./blogService"


const initialState={
    posts:null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

//create posts
export const createPosts=createAsyncThunk('posts/createPosts',async(postsData,thunkAPI)=>{
    try{
        return await blogService.createPosts(postsData)
    }
    catch(e){
        const message= (e.response && e.response.data && e.response.data.message) || e.message || e.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

//delete post
export const deletePost=createAsyncThunk('posts/deletePost',async(postsData,thunkAPI)=>{
    try{
        return await blogService.deletePost(postsData)
    }
    catch(e){
        const message= (e.response && e.response.data && e.response.data.message) || e.message || e.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

//get All posts
export const getAllPosts=createAsyncThunk('posts/getAllPosts',async(thunkAPI)=>{
    try{
        return await blogService.getAllPosts()
    }
    catch(e){
        const message= (e.response && e.response.data && e.response.data.message) || e.message || e.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

export const blogSlice=createSlice(
    {
        name:'blog',
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
            .addCase(createPosts.pending,(state)=>{
                state.isLoading=true
            })
            .addCase(createPosts.fulfilled,(state,action)=>{
                
                state.isLoading=false
                state.isSuccess=true
                console.log(action.payload)
                const pos=state.posts
                pos.push(action.payload)
                state.posts=pos
            })
            .addCase(createPosts.rejected,(state,action)=>{
                state.isLoading=false
                state.profile=null
                state.isError=true
                state.message=action.payload
    
            })
            .addCase(getAllPosts.pending,(state)=>{
                state.isLoading=true
            })
            .addCase(getAllPosts.fulfilled,(state,action)=>{
                state.isLoading=false
                state.isSuccess=true
                state.posts=action.payload
            })
            .addCase(getAllPosts.rejected,(state,action)=>{
                state.isLoading=false
                state.posts=null
                state.isError=true
                state.message=action.payload
    
            })
            .addCase(deletePost.pending,(state)=>{
                state.isLoading=true
            })
            .addCase(deletePost.fulfilled,(state,action)=>{
                state.isLoading=false
                state.isSuccess=true
                const deleted=state.movies.filter(data=>data._id!==action.payload._id)
                state.posts=deleted
            })
            .addCase(deletePost.rejected,(state,action)=>{
                state.isLoading=false
                state.posts=null
                state.isError=true
                state.message=action.payload
    
            })
        }
    }

)

export const {reset,logout}=blogSlice.actions
export default blogSlice.reducer