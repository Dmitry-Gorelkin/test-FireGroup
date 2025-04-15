import styled from 'styled-components';

export const PostNoneContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 5vw;

  @media screen and (min-width: 768px) {
    gap: 30px;
  }

  @media screen and (min-width: 1440px) {
    gap: 50px;
  }
`;

export const PostNoneTitle = styled.p`
  color: ${p => p.theme.colors.accent};
  text-transform: uppercase;
`;
