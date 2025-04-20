import styled from 'styled-components';

export const PostItemDeleteContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 10px;

  gap: 10px;

  @media screen and (min-width: 1440px) {
    padding: 20px;

    gap: 20px;
  }
`;

export const PostItemDeleteBtnContainer = styled.div`
  display: flex;
  gap: 15px;

  @media screen and (min-width: 1440px) {
    gap: 20px;
  }
`;

export const PostItemDeleteBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 5px 10px;

  border-radius: 8px;

  cursor: pointer;

  color: ${p => p.theme.colors.textWhite};
  background-color: ${p => p.theme.colors.btn};

  &:hover,
  &:focus {
    background-color: ${p => p.theme.colors.btnHover};
  }

  @media screen and (min-width: 1440px) {
    padding: 10px 15px;
  }
`;
