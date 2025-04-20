import initDB from '../../services/db';
import { selectDelPost } from '../../store/selectors';
import useAppStore from '../../store/useAppStore';
import {
  PostItemDeleteBtn,
  PostItemDeleteBtnContainer,
  PostItemDeleteContainer,
} from './PostItemDelete.styled';

const PostItemDelete = ({ closeModal, id }) => {
  const delPodt = useAppStore(selectDelPost);

  const handleDelete = async () => {
    const db = await initDB();
    const tx = db.transaction('images', 'readwrite');
    const store = tx.objectStore('images');
    const result = await store.get(id);

    if (result?.file) {
      const objectUrl = URL.createObjectURL(result.file);
      URL.revokeObjectURL(objectUrl);
    }

    await store.delete(id);
    await tx.done;

    delPodt(id);
    closeModal();
  };

  return (
    <PostItemDeleteContainer>
      <p>Are you sure you want to delete?</p>
      <PostItemDeleteBtnContainer>
        <PostItemDeleteBtn onClick={handleDelete}>OK</PostItemDeleteBtn>
        <PostItemDeleteBtn onClick={closeModal}>Cansel</PostItemDeleteBtn>
      </PostItemDeleteBtnContainer>
    </PostItemDeleteContainer>
  );
};

export default PostItemDelete;
