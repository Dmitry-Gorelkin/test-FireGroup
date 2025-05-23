import { useState } from 'react';
import Logo from '../Logo/Logo';
import NewPostForm from '../NewPostForm/NewPostForm';
import AppModal from '../AppModal/AppModal';
import { Container } from '../UI/Conteyner/Conteiner.styled';
import { Section } from '../UI/Section/Section.styled';
import {
  HeaderBackgroundColor,
  HeaderContainer,
  HeaderMobIcon,
  HeaderBtnNewPost,
} from './Header.styled';

const Header = () => {
  const [open, setOpen] = useState(false);

  const openModal = () => setOpen(true);
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
              <HeaderMobIcon onClick={openModal} />
              <HeaderBtnNewPost onClick={openModal}>
                <span>New Post</span>
              </HeaderBtnNewPost>
            </HeaderContainer>
          </Section>
        </Container>
      </HeaderBackgroundColor>
      <AppModal isOpen={open} closeModal={closeModal}>
        <NewPostForm closeModal={closeModal} />
      </AppModal>
    </>
  );
};

export default Header;
