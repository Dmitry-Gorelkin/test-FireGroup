import PostList from '../PostList/PostList';
import PostNone from '../PostNone/PostNone';
import { Container } from '../UI/Conteyner/Conteiner.styled';

import testPost from '../../data';

const MainLayout = () => {
  return <Container>{testPost.length > 0 ? <PostList /> : <PostNone />}</Container>;
};

export default MainLayout;
