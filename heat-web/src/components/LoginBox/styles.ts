import styled from 'styled-components';

import bannerGirl from '../../assets/banner-girl.png';

export const Container = styled.section`
  height: 100vh;
  width: 100%;
  background: #17171a url(${bannerGirl}) no-repeat center top;

  padding: 30rem 2rem 0;
  text-align: center;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  strong {
    font-size: 1.25rem;
    line-height: 2rem;
  }
`;

export const SignInWithGithub = styled.a`
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
