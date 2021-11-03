import { FormEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { api } from '../../services/api';

import { Container, Title, Form } from './styles';

export function EnterRoom() {
  const history = useHistory();

  const [code, setCode] = useState('');

  async function handleEnterRoom(event: FormEvent) {
    event.preventDefault();

    if (code.trim() === '') {
      return;
    }

    const { data } = await api.get(`/rooms/${code}`);

    if (!data) {
      alert('A sala não existe');
      return;
    }

    history.push(`/events/${code}`);
  }

  return (
    <Container>
      <Title>Entre em uma sala</Title>

      <Form onSubmit={handleEnterRoom}>
        <input
          id="roomCode"
          name="roomCode"
          placeholder="Digite o código da sala"
          value={code}
          onChange={event => setCode(event.target.value)}
        />
        <button type="submit">ENTRAR NA SALA</button>
      </Form>
    </Container>
  );
}
