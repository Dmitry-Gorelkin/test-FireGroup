import PostList from '../PostList/PostList';
import PostNone from '../PostNone/PostNone';
import { Container } from '../UI/Conteyner/Conteiner.styled';
import { Section } from '../UI/Section/Section.styled';

import testPost from '../../data';

const MainLayout = () => {
  return (
    <Container>
      <Section>{testPost.length > 0 ? <PostList /> : <PostNone />}</Section>
    </Container>
  );
};

export default MainLayout;
