import styled from 'styled-components';

export const PostListContainer = styled.ul`
  display: flex;
  flex-direction: column;

  gap: 15px;

  padding: 0px 10px;

  @media screen and (min-width: 425px) {
    gap: 20px;
  }

  @media screen and (min-width: 768px) {
    gap: 25px;
  }

  @media screen and (min-width: 1440px) {
    gap: 30px;
  }
`;
