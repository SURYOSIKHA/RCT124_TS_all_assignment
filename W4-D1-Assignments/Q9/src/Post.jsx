import React, { useState, useMemo, useCallback } from 'react';

// Memoize Post component to prevent unnecessary re-renders
const Post = React.memo(({ id, title, body, initialVerifyPost }) => {
  const [verifyPost, setVerifyPost] = useState(initialVerifyPost);

  // Memoize the background color generation to prevent recalculation
  const randomBgColor = useMemo(() => {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }, []);

  // Memoize the toggleVerifyPost function to avoid recreation on every render
  const toggleVerifyPost = useCallback(() => {
    setVerifyPost(prevState => !prevState);
  }, []);

  return (
    <div style={{ backgroundColor: randomBgColor, padding: '10px', margin: '10px' }}>
      <h2>{title}</h2>
      <p>{body}</p>
      <button onClick={toggleVerifyPost}>
        {verifyPost ? 'Verified' : 'Verify'}
      </button>
    </div>
  );
});

export default Post;
