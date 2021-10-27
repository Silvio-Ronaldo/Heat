import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { Header } from '../../components/Header';

import { Container, Content } from './styles';

export function GithubLoading() {
  const history = useHistory();

  useEffect(() => {
    const roomCode = localStorage.getItem('@heat:code');

    setTimeout(() => {
      history.push(`/events/${roomCode}`);
    }, 3000);
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
