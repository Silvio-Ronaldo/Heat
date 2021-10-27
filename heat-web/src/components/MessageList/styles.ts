import styled, { css } from 'styled-components';

type UserImageProps = {
  primaryColor: string;
  secondaryColor: string;
};

export const Container = styled.section`
  display: flex;
  flex-direction: column;

  justify-content: space-between;
  align-items: flex-start;

  > img {
    height: 1.5rem;
    margin: 2rem 0;
  }
`;

export const Messages = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2.5rem;
  flex: 1;

  li {
    max-width: 440px;

    &:nth-child(2) {
      margin-left: 5rem;
    }
  }
`;

export const MessageContent = styled.p`
  font-size: 1.25rem;
  line-height: 1.75rem;
`;

export const MessageUser = styled.div`
  margin-top: 1rem;
  display: flex;
  align-items: center;

  span {
    font-size: 1rem;
    margin-left: 0.75rem;
  }
`;

export const UserImage = styled.div<UserImageProps>`
  padding: 0.125rem;
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
    width: 1.875rem;
    height: 1.875rem;
    border-radius: 50%;
    border: 4px solid #121214;
  }
`;
