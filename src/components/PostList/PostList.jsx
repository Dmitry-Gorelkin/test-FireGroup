import PostItem from '../PostItem/PostItem';
import { useEffect, useState } from 'react';

import testPost from '../../data';

const PostList = () => {
  const [posts, setPosts] = useState(testPost);

  useEffect(() => {
    setPosts(prev => prev.sort((a, b) => b.id - a.id));
  }, []);

  return (
    <ul>
      {posts.map(e => (
        <PostItem key={e.id} post={e} />
      ))}
    </ul>
  );
};

export default PostList;
