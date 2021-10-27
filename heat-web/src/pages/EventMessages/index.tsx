import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { LoginBox } from '../../components/LoginBox';
import { MessageList } from '../../components/MessageList';
import { SendMessageForm } from '../../components/SendMessageForm';
import { RoomCode } from '../../components/RoomCode';

import { AuthContext } from '../../contexts/auth';

import { Container } from './styles';

type RoomParams = {
  id: string;
};

export function EventMessages() {
  const { authenticatedUser } = useContext(AuthContext);

  const params = useParams<RoomParams>();
  const code = params.id;

  useEffect(() => {
    localStorage.setItem('@heat:code', code);
  }, [code]);

  return (
    <Container isSigned={!!authenticatedUser}>
      <MessageList />
      <RoomCode code={code} />
      {authenticatedUser ? <SendMessageForm /> : <LoginBox />}
    </Container>
  );
}
