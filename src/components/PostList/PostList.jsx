import PostItem from '../PostItem/PostItem';
import { Section } from '../UI/Section/Section.styled';
import useAppStore from '../../store/useAppStore';
import { selectPosts } from '../../store/selectors';
import { PostListContainer } from './PostList.styled';

const PostList = () => {
  const posts = useAppStore(selectPosts);

  return (
    <Section>
      <PostListContainer>
        {posts.map(e => (
          <PostItem key={e.id} post={e} />
        ))}
      </PostListContainer>
    </Section>
  );
};

export default PostList;
