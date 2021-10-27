import styled from 'styled-components';

export const Container = styled.div`
  padding: 3rem 0;
  height: 50vh;
  border-right: 1px solid gray;
`;

export const Title = styled.h1`
  width: 60%;
  color: white;
  height: 27vh;
`;

export const Button = styled.button`
  height: 8vh;
  width: 30%;
  border: none;
  color: white;
  background-color: orangered;
  font-size: 1rem;
  font-weight: bold;

  &:hover {
    filter: brightness(0.9);
    cursor: pointer;
  }
`;
