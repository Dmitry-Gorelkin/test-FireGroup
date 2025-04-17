import PostItem from '../PostItem/PostItem';
import { useEffect, useState } from 'react';

import testPost from '../../data';
import { Section } from '../UI/Section/Section.styled';

const PostList = () => {
  const [posts, setPosts] = useState(testPost);

  useEffect(() => {
    setPosts(prev => prev.sort((a, b) => b.id - a.id));
  }, []);

  return (
    <Section>
      <ul>
        {posts.map(e => (
          <PostItem key={e.id} post={e} />
        ))}
      </ul>
    </Section>
  );
};

export default PostList;
