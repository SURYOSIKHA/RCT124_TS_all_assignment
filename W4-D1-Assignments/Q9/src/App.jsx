import React, { useState, useEffect, useCallback } from 'react';
import Post from './Post';

function App() {
  const [timer, setTimer] = useState(0);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [posts, setPosts] = useState([]);

  // Increment timer every second
  useEffect(() => {
    const interval = setInterval(() => setTimer(prev => prev + 1), 1000);
    return () => clearInterval(interval);
  }, []);

  // Add post handler
  const addPost = useCallback(() => {
    setPosts(prevPosts => [
      ...prevPosts,
      { id: posts.length + 1, title, body, verifyPost: false }
    ]);
    setTitle('');
    setBody('');
  }, [title, body, posts.length]);

  return (
    <div>
      <h1>Timer: {timer}</h1>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Body"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />
      <button onClick={addPost}>Add Post</button>

      {posts.map(post => (
        <Post
          key={post.id}
          id={post.id}
          title={post.title}
          body={post.body}
          initialVerifyPost={post.verifyPost}
        />
      ))}
    </div>
  );
}

export default App;
