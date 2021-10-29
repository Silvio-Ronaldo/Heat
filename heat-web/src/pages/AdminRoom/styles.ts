import styled, { css } from 'styled-components';

type EventContainerProps = {
  isSigned: boolean;
  primaryColor: string;
  secondaryColor: string;
};

export const Container = styled.main<EventContainerProps>`
  max-width: 1200px;
  height: 100vh;
  margin: 0 auto;
  width: 100vw;

  display: grid;
  grid-template-columns: 1fr 275px 453px;
  column-gap: 60px;
  position: relative;

  ${({ isSigned, primaryColor, secondaryColor }) =>
    isSigned &&
    css`
      &::before {
        content: '';
        height: 100vh;
        width: 18.25rem;
        background-size: cover;
        position: absolute;
        right: -3.75rem;
        top: 0;
        background: linear-gradient(
          100deg,
          ${primaryColor} 0%,
          ${secondaryColor} 100%
        );
      }
    `}
`;

export const CenterPanel = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 7rem;

  > span {
    font-size: 2.5rem;
    color: #ffffff;
    display: flex;
    align-items: center;
    gap: 1rem;
  }
`;

export const CloseButton = styled.button`
  border: 0;
  background-color: transparent;
  color: #ffffff;
  cursor: pointer;
  transition: transform 0.5s, color 0.5s;

  &:hover {
    transform: scale(1.5);
    color: #fb1528;
  }
`;
