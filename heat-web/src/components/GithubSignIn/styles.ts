import styled from 'styled-components';

export const Container = styled.a`
  background: #ffcd1e;
  margin-top: 1rem;
  padding: 0 2.5rem;
  height: 3.5rem;
  color: #09090a;
  font-size: 0.875rem;
  font-weight: bold;
  text-transform: uppercase;
  text-decoration: none;

  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    margin-right: 1rem;
  }

  &:hover {
    filter: brightness(0.9);
  }
`;
