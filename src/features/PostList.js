import React, { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { fetchPosts,forAllPosts,getStatus,getError } from './postsSlice'
import PostExcerpt from "./PostExcerpt";

const PostList = () => {
  let dispatch=useDispatch()

let posts=useSelector(forAllPosts)
let postStatus=useSelector(getStatus)
let errorPost=useSelector(getError)

useEffect(()=>{
    if(postStatus==='idle'){
        dispatch(fetchPosts())
    }
},[postStatus,dispatch])

  return (
    postStatus==='loading'?<p>loading...</p>:
    postStatus==="error"? <p>{errorPost}</p>:
    <div>
       <h1>Posts</h1>
     {posts && posts.map((post)=> <PostExcerpt key={post.id} post={post}/> )} 
    </div>
  )
}

export default PostList