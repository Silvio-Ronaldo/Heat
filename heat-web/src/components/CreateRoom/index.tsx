import { useHistory } from 'react-router-dom';

import { Container, Title, Button } from './styles';

export function CreateRoom() {
  const history = useHistory();

  function handleCreateRoom() {
    history.push('/new');
  }

  return (
    <Container>
      <Title>Crie uma sala para o seu evento agora mesmo</Title>

      <Button onClick={handleCreateRoom}>Criar sala</Button>
    </Container>
  );
}
