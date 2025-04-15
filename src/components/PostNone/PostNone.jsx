import { PostNoneContainer, PostNoneTitle } from './PostNone.styled';

const PostNone = () => {
  return (
    <PostNoneContainer>
      <PostNoneTitle>No posts yet.</PostNoneTitle>
      <PostNoneTitle>Add your first one now!</PostNoneTitle>
    </PostNoneContainer>
  );
};

export default PostNone;
