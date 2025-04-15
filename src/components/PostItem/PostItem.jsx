import { useState } from 'react';

const PostItem = ({ post }) => {
  const [time, _] = useState(new Date(post.id));

  return (
    <li>
      <h3>{post.title}</h3>
      <p>{post.text}</p>

      <p>{time.toLocaleString()}</p>
    </li>
  );
};

export default PostItem;
