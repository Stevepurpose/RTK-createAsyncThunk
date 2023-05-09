import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addPost } from './postsSlice'

const PostForm = () => {
let[title,setTitle]=useState("")
let[snippet,setSnippet]=useState("")
let[author,setAuthor]=useState("")
let[addStatus,setAddStatus]=useState("idle")

let dispatch=useDispatch()

let addTitle=e=>setTitle(e.target.value)
let addSnippet=e=>setSnippet(e.target.value)
let addAuthor=e=>setAuthor(e.target.value)


let onSavePost=()=>{
  
  try{
    setAddStatus('pending')
   dispatch(addPost({title,snippet,author})).unwrap()
     setTitle('')
     setSnippet('')
     setAuthor('')
  }
catch(error){
    console.log('failed to save post')
}
finally{
    setAddStatus('idle')
}

}

  return (
    <div className='form-control'>
      <h1>Add Post</h1>
<form>
<input type='text'  onChange={addTitle} placeholder='title' value={title}/>
<textarea     onChange={addSnippet}  placeholder='snippet'  value={snippet}/>
<input type='text'   onChange={addAuthor}    placeholder='author' value={author}/>
<button type='button'   id="but-Form" onClick={onSavePost}>Save post</button>
</form>
    </div>
  )
}

export default PostForm