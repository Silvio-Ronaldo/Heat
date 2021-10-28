import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { Header } from '../../components/Header';

import { Container, Content } from './styles';

export function GithubLoading() {
  const history = useHistory();

  useEffect(() => {
    const page = localStorage.getItem('@heat:page');

    if (page) {
      setTimeout(() => {
        history.push(`${page}`);
      }, 3000);
    }
  }, [history]);

  return (
    <Container>
      <Header />

      <Content>
        <h2>Aguarde um momento, estamos processando seu login...</h2>
      </Content>
    </Container>
  );
}
