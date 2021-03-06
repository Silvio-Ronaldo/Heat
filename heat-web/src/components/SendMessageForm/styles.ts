import styled, { css } from 'styled-components';

type UserImageProps = {
  primaryColor: string;
  secondaryColor: string;
};

export const Container = styled.section`
  background: #1b1b1f;
  padding: 1.5rem;
  align-self: center;

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  position: relative;
`;

export const SignOutButton = styled.button`
  background: transparent;
  border: 0;
  color: #c4c4cc;

  position: absolute;
  left: 1.5rem;
  top: 1.5rem;

  cursor: pointer;

  &:hover {
    filter: brightness(0.9);
  }
`;

export const AdminButton = styled.button`
  background: transparent;
  border: 0;
  color: #c4c4cc;

  position: absolute;
  right: 1.5rem;
  top: 1.5rem;

  cursor: pointer;

  &:hover {
    filter: brightness(0.9);
  }
`;

export const UserInformation = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;

  strong {
    font-size: 1.5rem;
    line-height: 1.875rem;
    margin-top: 1rem;
  }

  span {
    display: flex;
    align-items: center;

    margin-top: 0.5rem;
    color: #c4c4cc;

    svg {
      margin-right: 0.5rem;
    }
  }
`;

export const UserImage = styled.div<UserImageProps>`
  padding: 0.1875rem;
  border-radius: 50%;
  line-height: 0;

  ${({ primaryColor, secondaryColor }) =>
    css`
      background: linear-gradient(
        100deg,
        ${primaryColor} 0%,
        ${secondaryColor} 100%
      );
    `}

  img {
    width: 5.875rem;
    height: 5.875rem;
    border-radius: 50%;
    border: 0.375rem solid #121214;
  }
`;

export const SendMessage = styled.form`
  display: flex;
  flex-direction: column;
  align-self: stretch;
  margin-top: 3rem;

  background: #202024;

  label {
    padding: 1.125rem;
    font-size: 1.25rem;
    background: #29292e;
    font-weight: bold;
    text-align: left;
  }

  textarea {
    background: transparent;
    border: 0;
    padding: 1.5rem;
    resize: none;
    height: 10rem;
    color: #e1e1e6;
    font-size: 1rem;
    line-height: 1.5rem;

    &:focus {
      outline: 0;
    }

    &::placeholder {
      color: #8d8d99;
    }
  }

  button {
    align-self: flex-end;
    background: #ff4500;
    margin: 1.5rem;
    border: 0;
    cursor: pointer;
    padding: 0 2rem;
    height: 2.5rem;
    color: #ffffff;
    font-size: 0.875rem;
    font-weight: bold;
    text-transform: uppercase;
    text-decoration: none;

    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;
