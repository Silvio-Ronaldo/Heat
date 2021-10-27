import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { LoginBox } from '../../components/LoginBox';
import { MessageList } from '../../components/MessageList';
import { SendMessageForm } from '../../components/SendMessageForm';
import { RoomCode } from '../../components/RoomCode';

import { AuthContext } from '../../contexts/auth';

import { Container } from './styles';
import { api } from '../../services/api';

type RoomParams = {
  id: string;
};

type EventData = {
  title: string;
  primary_color: string;
  secondary_color: string;
};

export function EventMessages() {
  const { authenticatedUser } = useContext(AuthContext);

  const [title, setTitle] = useState('');
  const [primaryColor, setPrimaryColor] = useState('');
  const [secondaryColor, setSecondaryColor] = useState('');

  const params = useParams<RoomParams>();
  const code = params.id;

  useEffect(() => {
    async function handleEventData() {
      const { data } = await api.get<EventData>(`/rooms/${code}`);

      setTitle(data.title);
      setPrimaryColor(data.primary_color);
      setSecondaryColor(data.secondary_color);
    }

    localStorage.setItem('@heat:code', code);
    handleEventData();
  }, [code]);

  return (
    <Container
      isSigned={!!authenticatedUser}
      primaryColor={primaryColor}
      secondaryColor={secondaryColor}
    >
      <MessageList
        primaryColor={primaryColor}
        secondaryColor={secondaryColor}
      />
      <RoomCode
        code={code}
        primaryColor={primaryColor}
        secondaryColor={secondaryColor}
      />
      {authenticatedUser ? (
        <SendMessageForm
          primaryColor={primaryColor}
          secondaryColor={secondaryColor}
        />
      ) : (
        <LoginBox />
      )}
    </Container>
  );
}
