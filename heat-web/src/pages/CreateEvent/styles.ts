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
`;

export const Title = styled.h1`
  width: 50vw;
  font-size: 1.5rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 75%;
  padding: 0.5rem 0;
  align-items: center;

  input {
    width: 25rem;
    height: 3rem;
    padding: 0 1rem;
    margin: 1rem 0;

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

export const LogoInput = styled.div`
  margin-top: 24px;
  position: relative;
  height: 9rem;
  width: 9rem;
  margin-right: 2rem;

  img {
    width: 8rem;
    height: 8rem;
    border-radius: 2rem;
  }

  label {
    position: absolute;
    width: 48px;
    height: 48px;
    background: #fb1528;
    border-radius: 50%;
    border: 0;
    right: 0;
    bottom: 0;
    transition: background-color 0.2s;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      width: 20px;
      height: 20px;
      color: #ffffff;
    }

    &:hover {
      filter: brightness(0.8);
    }

    input {
      display: none;
    }
  }
`;

export const Colors = styled.div`
  display: flex;
  margin-left: 2.7rem;

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
  top: -200px;
`;
