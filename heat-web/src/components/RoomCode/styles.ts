import styled from 'styled-components';

export const Container = styled.button`
  height: 2.5rem;
  border-radius: 0.5rem;
  overflow: hidden;
  margin-top: 1.5rem;
  cursor: pointer;

  background-color: transparent;
  border: 0.0625rem solid orangered;

  display: flex;

  &:hover {
    filter: brightness(0.9);
  }

  svg {
    background-color: orangered;
    padding: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 3rem;
  }

  span {
    color: white;
    display: block;
    align-self: center;
    flex: 1;
    padding: 0 0.2rem 0 0.2rem;
    font-size: 0.8rem;
    font-weight: 500;

    @media (max-width: 750px) {
      display: none;
    }
  }
`;
