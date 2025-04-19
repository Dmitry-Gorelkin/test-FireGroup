import { PostItemContainer, PostItemTitle, PostItemTime } from './PostItem.styled';
import imageURL from '../../../public/imageNone.jpg';
import { format } from 'date-fns';

const PostItem = ({ post }) => {
  const formattedDate = format(new Date(post.createdAt), 'yyyy MMMM dd, HH:mm');

  return (
    <PostItemContainer>
      <div>
        <div>
          <PostItemTitle>{post.title}</PostItemTitle>
          <p>{post.content}</p>
        </div>
        <img src={imageURL} alt="None Image" />
      </div>
      <PostItemTime>{formattedDate}</PostItemTime>
    </PostItemContainer>
  );
};

export default PostItem;
