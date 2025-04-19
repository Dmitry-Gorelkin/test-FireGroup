import styled from 'styled-components';
import { RiArticleLine } from 'react-icons/ri';

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;

  text-decoration: none;

  transition: transform 0.3s ease;

  &:hover,
  &:focus {
    transform: scale(1.05);
  }
`;

export const LogoText = styled.p`
  font-size: 12px;
  text-transform: uppercase;
  color: ${p => p.theme.colors.textWhite};

  @media screen and (min-width: 425px) {
    font-size: 16px;
  }

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 20px;
  }
`;

export const LogoIcon = styled(RiArticleLine)`
  width: 30px;
  height: 30px;

  fill: ${p => p.theme.colors.accent};

  @media screen and (min-width: 768px) {
    width: 40px;
    height: 40px;
  }

  @media screen and (min-width: 1440px) {
  }
`;
