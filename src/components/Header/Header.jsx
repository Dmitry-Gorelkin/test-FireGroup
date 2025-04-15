import Logo from '../Logo/Logo';
import { Container } from '../UI/Conteyner/Conteiner.styled';
import { Section } from '../UI/Section/Section.styled';
import { HeaderBackgroundColor, HeaderContainer } from './Header.styled';
import { BiCommentAdd } from 'react-icons/bi';

const Header = () => {
  return (
    <HeaderBackgroundColor>
      <Container>
        <Section>
          <HeaderContainer>
            <Logo />
            <BiCommentAdd />
            <div>New Post</div>
          </HeaderContainer>
        </Section>
      </Container>
    </HeaderBackgroundColor>
  );
};

export default Header;
