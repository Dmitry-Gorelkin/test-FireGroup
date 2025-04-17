import { useState } from 'react';
import Logo from '../Logo/Logo';
import NewPostForm from '../NewPostForm/NewPostForm';
import NewPostModal from '../NewPostModal/NewPostModal';
import { Container } from '../UI/Conteyner/Conteiner.styled';
import { Section } from '../UI/Section/Section.styled';
import { HeaderBackgroundColor, HeaderContainer } from './Header.styled';
import { BiCommentAdd } from 'react-icons/bi';

const Header = () => {
  const [open, setOpen] = useState(false);

  const closeModal = () => {
    setOpen(false);
  };

  return (
    <>
      <HeaderBackgroundColor>
        <Container>
          <Section>
            <HeaderContainer>
              <Logo />
              <BiCommentAdd />
              <div onClick={() => setOpen(true)}>New Post</div>
            </HeaderContainer>
          </Section>
        </Container>
      </HeaderBackgroundColor>
      <NewPostModal isOpen={open} closeModal={closeModal}>
        <NewPostForm closeModal={closeModal} />
      </NewPostModal>
    </>
  );
};

export default Header;
