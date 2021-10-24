import { useContext, useState, FormEvent } from 'react';
import { VscGithubInverted, VscSignOut } from 'react-icons/vsc';

import { AuthContext } from '../../contexts/auth';
import { api } from '../../services/api';

import {
  Container,
  SignOutButton,
  UserInformation,
  UserImage,
  SendMessage,
} from './styles';

export function SendMessageForm() {
  const { authenticatedUser, signOut } = useContext(AuthContext);
  const [message, setMessage] = useState('');

  async function handleSendMessage(event: FormEvent) {
    event.preventDefault();

    if (message.trim()) {
      await api.post('/messages', { message });

      setMessage('');
    }
  }

  return (
    <Container>
      <SignOutButton onClick={signOut}>
        <VscSignOut size={32} />
      </SignOutButton>

      <UserInformation>
        <UserImage>
          <img
            src={authenticatedUser?.avatar_url}
            alt={authenticatedUser?.name}
          />
        </UserImage>

        <strong>{authenticatedUser?.name}</strong>
        <span>
          <VscGithubInverted size={16} />
          {authenticatedUser?.login}
        </span>
      </UserInformation>

      <SendMessage onSubmit={handleSendMessage}>
        <label htmlFor="message">Mensagem</label>
        <textarea
          name="message"
          id="message"
          placeholder="Qual a sua expectativa para o evento?"
          onChange={event => setMessage(event.target.value)}
          value={message}
        />

        <button type="submit">Enviar mensagem</button>
      </SendMessage>
    </Container>
  );
}
