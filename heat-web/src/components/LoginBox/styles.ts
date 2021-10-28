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
