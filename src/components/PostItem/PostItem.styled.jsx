import styled from 'styled-components';

export const PostItemContainer = styled.li`
  display: flex;
  flex-direction: column;

  gap: 15px;

  padding: 10px;

  box-shadow: 0 0 15px ${p => p.theme.colors.accent};

  border-radius: 4px;

  @media screen and (min-width: 425px) {
    gap: 20px;
  }

  @media screen and (min-width: 768px) {
    padding: 20px;

    gap: 25px;
  }

  @media screen and (min-width: 1440px) {
    padding: 25px;
  }
`;

export const PostItemTitle = styled.h3`
  text-align: center;
  text-transform: uppercase;
`;

export const PostItemContainerImg = styled.div`
  display: flex;
  flex-direction: column;

  gap: 15px;

  @media screen and (min-width: 425px) {
    gap: 20px;
  }

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;

    gap: 25px;
  }

  @media screen and (min-width: 1440px) {
  }
`;

export const PostItemImg = styled.img`
  display: block;
  width: 100%;

  object-fit: cover;

  @media screen and (min-width: 425px) {
  }

  @media screen and (min-width: 768px) {
    width: 200px;
    height: 200px;
  }

  @media screen and (min-width: 1440px) {
    width: 400px;
    height: 400px;
  }
`;

export const PostItemTime = styled.div`
  display: flex;
  justify-content: end;
`;
