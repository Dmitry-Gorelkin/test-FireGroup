import { format } from 'date-fns';
import imageURL from '/imageNone.jpg';
import {
  PostItemContainer,
  PostItemTitle,
  PostItemTime,
  PostItemContainerImg,
  PostItemImg,
  PostItemIconDelete,
} from './PostItem.styled';
import initDB from '../../services/db';
import { useEffect, useState } from 'react';
import AppModal from '../AppModal/AppModal';
import PostItemDelete from '../PostItemDelete/PostItemDelete';

const PostItem = ({ post }) => {
  const formattedDate = format(new Date(post.createdAt), 'yyyy MMMM dd, HH:mm');
  const [imageSrc, setImageSrc] = useState(imageURL);

  const [open, setOpen] = useState(false);

  const closeModal = () => {
    setOpen(false);
  };

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
  }, [post.id]);

  return (
    <PostItemContainer>
      <PostItemTitle>{post.title}</PostItemTitle>
      <PostItemContainerImg>
        <PostItemImg src={imageSrc} alt="None Image" />
        <p>{post.content}</p>
      </PostItemContainerImg>
      <PostItemTime>{formattedDate}</PostItemTime>
      <PostItemIconDelete onClick={() => setOpen(true)} />
      <AppModal isOpen={open} closeModal={closeModal}>
        <PostItemDelete id={post.id} closeModal={closeModal} />
      </AppModal>
    </PostItemContainer>
  );
};

export default PostItem;
