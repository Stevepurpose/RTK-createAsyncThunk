import React from 'react'

const PostExcerpt = ({post}) => {
  return (
    <div className='per-article'>
        <p>{post.title}</p>
        <p>{post.snippet}</p>
        <p>{post.author}</p>
        
    </div>
  
  )
}

export default PostExcerpt