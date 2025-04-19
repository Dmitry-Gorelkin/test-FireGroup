import styled from 'styled-components';
import { BiCommentAdd } from 'react-icons/bi';

export const HeaderBackgroundColor = styled.div`
  background-color: ${p => p.theme.colors.backgroundSecondary};
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderMobIcon = styled(BiCommentAdd)`
  width: 40px;
  height: 40px;

  fill: ${p => p.theme.colors.btn};

  cursor: pointer;

  @media screen and (min-width: 768px) {
    display: none;
  }

  &:hover,
  &:focus {
    fill: ${p => p.theme.colors.btnHover};
  }
`;

export const HeaderBtnNewPost = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 5px 5px;

    border-radius: 8px;

    color: ${p => p.theme.colors.textWhite};
    background-color: ${p => p.theme.colors.btn};

    cursor: pointer;

    &:hover,
    &:focus {
      background-color: ${p => p.theme.colors.btnHover};
    }
  }

  @media screen and (min-width: 1440px) {
    padding: 10px 10px;
  }
`;
