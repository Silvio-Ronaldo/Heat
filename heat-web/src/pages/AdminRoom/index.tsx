import { useContext, useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { io } from 'socket.io-client';

import { VscComment } from 'react-icons/vsc';
import { MessageList } from '../../components/MessageList';
import { SendMessageForm } from '../../components/SendMessageForm';
import { RoomCode } from '../../components/RoomCode';

import { AuthContext } from '../../contexts/auth';

import { Container, CenterPanel } from './styles';
import { api } from '../../services/api';

type AdminRoomParams = {
  id: string;
};

type EventData = {
  title: string;
  primary_color: string;
  secondary_color: string;
  total_messages: number;
  user_id: string;
};

let totalCount = 0;

const socket = io('http://localhost:3333');

socket.on('new_message', () => {
  totalCount += 1;
});

export function AdminRoom() {
  const { authenticatedUser } = useContext(AuthContext);

  const [title, setTitle] = useState('');
  const [primaryColor, setPrimaryColor] = useState('');
  const [secondaryColor, setSecondaryColor] = useState('');
  const [totalComments, setTotalComments] = useState(0);
  const [userId, setUserId] = useState('');

  const history = useHistory();
  const params = useParams<AdminRoomParams>();
  const code = params.id;

  useEffect(() => {
    setInterval(() => {
      if (totalCount > 0) {
        setTotalComments(prevState => prevState + totalCount);

        totalCount -= 1;
      }
    }, 1000);
  }, []);

  useEffect(() => {
    async function handleEventData() {
      const { data } = await api.get<EventData>(`/rooms/${code}`);

      if (data.user_id !== authenticatedUser?.id) {
        history.push(`/events/${code}`);
      }

      setTitle(data.title);
      setPrimaryColor(data.primary_color);
      setSecondaryColor(data.secondary_color);
      setTotalComments(data.total_messages);
      setUserId(data.user_id);
    }

    handleEventData();
  }, [code, authenticatedUser?.id, history]);

  return (
    <Container
      isSigned={!!authenticatedUser}
      primaryColor={primaryColor}
      secondaryColor={secondaryColor}
    >
      <MessageList
        title={title}
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
          {totalComments}
          <VscComment color="#ff4500" size={48} />
        </span>
      </CenterPanel>

      {authenticatedUser && (
        <SendMessageForm
          primaryColor={primaryColor}
          secondaryColor={secondaryColor}
          userId={userId}
          isAdmin
        />
      )}
    </Container>
  );
}
