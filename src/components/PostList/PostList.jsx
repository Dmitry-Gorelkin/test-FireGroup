import PostItem from '../PostItem/PostItem';
import { Section } from '../UI/Section/Section.styled';
import useAppStore from '../../store/useAppStore';
import { selectPosts } from '../../store/selectors';

const PostList = () => {
  const posts = useAppStore(selectPosts);

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
