import styled from 'styled-components';

export const Container = styled.div`
  padding: 3rem 0;
  height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  color: white;
  height: 30vh;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 60%;

  input {
    height: 8vh;
    margin-bottom: 2rem;
    padding: 0 1rem;

    &:focus {
      outline: none;
    }
  }

  button {
    height: 8vh;
    border: none;
    color: white;
    background-color: orangered;
    font-size: 1rem;
    font-weight: bold;

    &:hover {
      filter: brightness(0.9);
      cursor: pointer;
    }
  }
`;
