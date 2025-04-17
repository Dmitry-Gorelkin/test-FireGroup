import { Section } from '../UI/Section/Section.styled';
import { PostNoneContainer, PostNoneTitle } from './PostNone.styled';

const PostNone = () => {
  return (
    <Section>
      <PostNoneContainer>
        <PostNoneTitle>No posts yet.</PostNoneTitle>
        <PostNoneTitle>Add your first one now!</PostNoneTitle>
      </PostNoneContainer>
    </Section>
  );
};

export default PostNone;
