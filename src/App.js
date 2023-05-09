import React from 'react';

import PostForm  from './features/PostForm';
import PostList from './features/PostList'
import './App.css';

function App() {
  return (
    <div className="App">
      <PostForm/>
      <PostList/>
    </div>
  );
}

export default App;
