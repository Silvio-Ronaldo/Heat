import { useContext, useState, FormEvent } from 'react';
import {
  VscClose,
  VscGithubInverted,
  VscSettings,
  VscSignOut,
} from 'react-icons/vsc';
import { useParams, useHistory } from 'react-router-dom';

import { AuthContext } from '../../contexts/auth';
import { api } from '../../services/api';

import {
  Container,
  SignOutButton,
  UserInformation,
  UserImage,
  SendMessage,
  AdminButton,
} from './styles';

type SendMessageFormProps = {
  primaryColor: string;
  secondaryColor: string;
  userId: string;
  isAdmin: boolean;
};

type RoomParams = {
  id: string;
};

export function SendMessageForm({
  primaryColor,
  secondaryColor,
  userId,
  isAdmin,
}: SendMessageFormProps) {
  const { authenticatedUser, signOut } = useContext(AuthContext);
  const [message, setMessage] = useState('');

  const params = useParams<RoomParams>();
  const history = useHistory();

  async function handleSendMessage(event: FormEvent) {
    event.preventDefault();

    if (message.trim()) {
      await api.post(
        '/messages',
        {
          message,
        },
        {
          headers: {
            code: params.id,
          },
        },
      );

      setMessage('');
    }
  }

  async function handleSignOut() {
    signOut();

    history.push(`/events/${params.id}`);
  }

  async function handleManageRoom() {
    history.push(`/admin/events/${params.id}`);
  }

  async function handleCloseRoom() {
    await api.delete(`/rooms/${params.id}`);

    history.push('/');
  }

  return (
    <Container>
      <SignOutButton onClick={handleSignOut}>
        <VscSignOut size={32} />
      </SignOutButton>

      {authenticatedUser?.id === userId && !isAdmin && (
        <AdminButton onClick={handleManageRoom}>
          <VscSettings size={32} />
        </AdminButton>
      )}

      {authenticatedUser?.id === userId && isAdmin && (
        <AdminButton onClick={handleCloseRoom}>
          <VscClose size={32} />
        </AdminButton>
      )}

      <UserInformation>
        <UserImage primaryColor={primaryColor} secondaryColor={secondaryColor}>
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
