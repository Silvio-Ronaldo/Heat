import styled, { css } from 'styled-components';

import backgroundImg from '../../assets/background.svg';

type EventContainerProps = {
  isSigned: boolean;
};

export const Container = styled.main<EventContainerProps>`
  max-width: 1200px;
  height: 100vh;
  margin: 0 auto;

  display: grid;
  grid-template-columns: 1fr 453px;
  column-gap: 120px;
  position: relative;

  ${props =>
    props.isSigned &&
    css`
      &::before {
        content: '';
        height: 100vh;
        width: 18.25rem;
        background: url(${backgroundImg}) no-repeat;
        background-size: cover;
        position: absolute;
        right: -3.75rem;
        top: 0;
      }
    `}
`;
