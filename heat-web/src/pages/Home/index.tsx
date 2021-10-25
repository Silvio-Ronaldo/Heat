import { Header } from '../../components/Header';
import { CreateRoom } from '../../components/CreateRoom';
import { EnterRoom } from '../../components/EnterRoom';

import { Container, ContentBox } from './styles';

export function Home() {
  return (
    <Container>
      <Header />

      <ContentBox>
        <CreateRoom />

        <EnterRoom />
      </ContentBox>
    </Container>
  );
}
