import { useContext } from 'react';

import { LoginBox } from '../../components/LoginBox';
import { MessageList } from '../../components/MessageList';
import { SendMessageForm } from '../../components/SendMessageForm';

import { AuthContext } from '../../contexts/auth';

import { Container } from './styles';

export function EventMessages() {
  const { authenticatedUser } = useContext(AuthContext);

  return (
    <Container isSigned={!!authenticatedUser}>
      <MessageList />
      {authenticatedUser ? <SendMessageForm /> : <LoginBox />}
    </Container>
  );
}
