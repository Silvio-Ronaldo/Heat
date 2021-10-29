import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { VscClose, VscComment } from 'react-icons/vsc';
import { MessageList } from '../../components/MessageList';
import { SendMessageForm } from '../../components/SendMessageForm';
import { RoomCode } from '../../components/RoomCode';

import { AuthContext } from '../../contexts/auth';

import { Container, CenterPanel, CloseButton } from './styles';
import { api } from '../../services/api';

type AdminRoomParams = {
  id: string;
};

type EventData = {
  title: string;
  primary_color: string;
  secondary_color: string;
};

export function AdminRoom() {
  const { authenticatedUser } = useContext(AuthContext);

  const [title, setTitle] = useState('');
  const [primaryColor, setPrimaryColor] = useState('');
  const [secondaryColor, setSecondaryColor] = useState('');

  const params = useParams<AdminRoomParams>();
  const code = params.id;

  useEffect(() => {
    async function handleEventData() {
      const { data } = await api.get<EventData>(`/rooms/${code}`);

      setTitle(data.title);
      setPrimaryColor(data.primary_color);
      setSecondaryColor(data.secondary_color);
    }

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

      <CenterPanel>
        <RoomCode
          code={code}
          primaryColor={primaryColor}
          secondaryColor={secondaryColor}
        />

        <span>
          39
          <VscComment color="#ff4500" size={48} />
        </span>

        <CloseButton type="button">
          <VscClose size={48} />
        </CloseButton>
      </CenterPanel>

      {authenticatedUser && (
        <SendMessageForm
          primaryColor={primaryColor}
          secondaryColor={secondaryColor}
        />
      )}
    </Container>
  );
}
