import styled, { css } from 'styled-components';

import backgroundImg from '../../assets/background.svg';

type EventContainerProps = {
  isSigned: boolean;
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

  ${props =>
    props.isSigned &&
    css`
      &::before {
        content: '';
        height: 100vh;
        width: 18.25rem;
        background: linear-gradient(180deg, #ff4500 0%, #fb1528 100%);
        background-size: cover;
        position: absolute;
        right: -3.75rem;
        top: 0;
      }
    `}
`;
