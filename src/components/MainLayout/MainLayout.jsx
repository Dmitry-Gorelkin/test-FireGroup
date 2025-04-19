import PostList from '../PostList/PostList';
import PostNone from '../PostNone/PostNone';
import useAppStore from '../../store/useAppStore';
import { Container } from '../UI/Conteyner/Conteiner.styled';
import { selectPosts } from '../../store/selectors';

const MainLayout = () => {
  const posts = useAppStore(selectPosts);

  return <Container>{posts.length > 0 ? <PostList /> : <PostNone />}</Container>;
};

export default MainLayout;
