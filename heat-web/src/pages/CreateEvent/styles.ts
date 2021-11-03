import styled from 'styled-components';

export const Container = styled.main`
  max-width: 1200px;
  height: 100vh;
  width: 100vw;
  margin: 0 auto;
`;

export const Content = styled.div`
  display: flex;
  position: relative;
  padding-top: 10rem;
`;

export const Title = styled.h1`
  width: 40vw;
  font-size: 1.25rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 75%;
  padding: 0.5rem 0;
  margin-top: 2rem;

  input {
    width: 25rem;
    height: 3rem;
    padding: 0 1rem;
    margin: 1rem 0;
    font-size: 1rem;

    &:focus {
      outline: none;
    }
  }

  button {
    width: 25rem;
    height: 3rem;
    margin-top: 1rem;
    border: 0;
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

export const Colors = styled.div`
  display: flex;

  section {
    display: flex;
    align-items: center;
    margin: 1rem 0;

    input {
      width: 3rem;
      height: 1.5rem;
      margin: 0 3rem 0 1rem;
      padding: 0;
    }
  }
`;

export const Illustration = styled.aside`
  position: absolute;
  right: 0;
  top: -178px;
  background-color: #fb4500;
  height: 100vh;
  width: 30%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 1rem 0;

  p {
    font-size: 2rem;
    font-weight: bold;
  }

  a {
    margin-top: 10rem;
  }
`;
