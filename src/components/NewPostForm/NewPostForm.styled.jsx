import styled from 'styled-components';
import { FaRegImage } from 'react-icons/fa';

export const NewPostFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 90vw;

  gap: 15px;

  padding: 10px;

  @media screen and (min-width: 425px) {
    width: 80vw;
  }

  @media screen and (min-width: 768px) {
    width: 400px;
    padding: 20px;
  }

  @media screen and (min-width: 1440px) {
    width: 600px;
    padding: 25px;
  }
`;

export const NewPostFormLabel = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: center;

  gap: 5px;

  color: ${p => p.theme.colors.title};

  text-transform: uppercase;
`;

export const NewPostFormInput = styled.input`
  display: block;
  width: 100%;

  padding: 10px;

  color: ${p => p.theme.colors.text};

  border-radius: 8px;
  border: 1px solid ${p => p.theme.colors.backgroundSecondary};

  outline: none;
  resize: none;
`;

export const NewPostFormTextArea = styled.textarea`
  display: block;
  width: 100%;
  height: 100px;

  padding: 10px;

  color: ${p => p.theme.colors.text};

  border-radius: 8px;
  border: 1px solid ${p => p.theme.colors.backgroundSecondary};

  outline: none;
  resize: none;

  @media screen and (min-width: 768px) {
    height: 200px;
    padding: 20px;
  }

  @media screen and (min-width: 1440px) {
    height: 300px;
    padding: 25px;
  }
`;

export const NewPostErrorMessage = styled.div`
  color: ${p => p.theme.colors.error};
`;

export const NewPostFormBtnContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NewPostFormBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 5px 10px;

  border: none;
  border-radius: 8px;

  color: ${p => p.theme.colors.textWhite};
  background-color: ${p => p.theme.colors.btn};

  cursor: pointer;

  @media screen and (min-width: 768px) {
    padding: 10px 20px;
  }

  &:hover,
  &:focus {
    background-color: ${p => p.theme.colors.btnHover};
  }

  &:disabled {
    background-color: ${p => p.theme.colors.btnDisabled};
    cursor: not-allowed;
  }
`;

export const NewPostFileInputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 10px;

  border-radius: 8px;
  border: none;

  color: ${p => p.theme.colors.textWhite};
  background-color: ${p => (p.load ? p.theme.colors.success : p.theme.colors.btn)};

  cursor: pointer;
`;

export const NewPostFileInput = styled.input`
  display: none;
`;

export const NewPostFileIcon = styled(FaRegImage)`
  width: 30px;
  height: 30px;

  fill: ${p => p.theme.colors.textWhite};

  cursor: pointer;
`;
