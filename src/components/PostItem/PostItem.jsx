import { format } from 'date-fns';
import imageURL from '../../../public/imageNone.jpg';
import {
  PostItemContainer,
  PostItemTitle,
  PostItemTime,
  PostItemContainerImg,
  PostItemImg,
} from './PostItem.styled';
import initDB from '../../services/db';
import { useEffect, useState } from 'react';

const PostItem = ({ post }) => {
  const formattedDate = format(new Date(post.createdAt), 'yyyy MMMM dd, HH:mm');
  const [imageSrc, setImageSrc] = useState(imageURL);

  useEffect(() => {
    const loadImage = async () => {
      const db = await initDB();
      const tx = db.transaction('images', 'readonly');
      const store = tx.objectStore('images');
      const result = await store.get(post.id);
      await tx.done;

      if (result?.file) {
        const objectUrl = URL.createObjectURL(result.file);
        setImageSrc(objectUrl);
      }
    };

    loadImage();

    return () => {
      if (imageSrc !== imageURL) {
        URL.revokeObjectURL(imageSrc);
      }
    };
  }, [imageSrc, post.id]);

  return (
    <PostItemContainer>
      <PostItemTitle>{post.title}</PostItemTitle>
      <PostItemContainerImg>
        <PostItemImg src={imageSrc} alt="None Image" />
        <p>{post.content}</p>
      </PostItemContainerImg>

      <PostItemTime>{formattedDate}</PostItemTime>
    </PostItemContainer>
  );
};

export default PostItem;
