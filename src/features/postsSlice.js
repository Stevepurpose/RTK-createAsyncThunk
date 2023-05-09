import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";
import  axios from'axios'


export const fetchPosts=createAsyncThunk('posts/fetchPosts',async()=>{
const response=await axios.get('http://localhost:5000/posts')
return  response.data
 
})


export const addPost=createAsyncThunk('posts/addPost',async(newPost)=>{
    const response=await axios.post('http://localhost:5000/posts',newPost)
    
    return response.data
    
})


let initialState={posts:[],status:'idle',error:null}

let postsSlice=createSlice({
name:"posts",
initialState,
reducers:{
    postAdded:{
        reducer:(state,action)=>{
            state.posts.push(action.payload)
        },

        prepare(title,snippet,author){
            return{
                payload:{
                    id:nanoid(),
                  title,
                  snippet,
                  author,
                // id:nanoid()

                }
            }

        }
    }
},

extraReducers:(builder)=>{
builder
     .addCase(fetchPosts.pending,(state)=>{
        state.staus='loading'
    
     })

     .addCase(fetchPosts.fulfilled,(state,action)=>{
        state.staus='succeeded'
      state.posts=action.payload
    
     })
     .addCase(fetchPosts.rejected,(state,action)=>{
        state.staus='failed'
      state.posts=action.error.message
    
     })

     .addCase(addPost.fulfilled,(state,action)=>{
        state.posts.push(action.payload)
     })
}

})


export const forAllPosts=((state)=>state.posts.posts)
  export const  getStatus= ((state)=>state.posts.status)
  export const  getError= ((state)=>state.posts.error)

export const{postAdded}=postsSlice.actions

export default postsSlice.reducer