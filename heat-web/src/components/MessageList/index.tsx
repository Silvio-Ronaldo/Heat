import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { io } from 'socket.io-client';

import { api } from '../../services/api';

import {
  Container,
  Messages,
  MessageContent,
  MessageUser,
  UserImage,
} from './styles';

type Message = {
  id: string;
  text: string;
  user: {
    name: string;
    avatar_url: string;
  };
};

const messagesQueue: Message[] = [];

const socket = io('http://localhost:3333');

socket.on('new_message', (newMessage: Message) => {
  messagesQueue.push(newMessage);
});

type MessageListProps = {
  title: string;
  primaryColor: string;
  secondaryColor: string;
};

type RoomParams = {
  id: string;
};

export function MessageList({
  title,
  primaryColor,
  secondaryColor,
}: MessageListProps) {
  const [messages, setMessages] = useState<Message[]>([]);

  const params = useParams<RoomParams>();

  useEffect(() => {
    setInterval(() => {
      if (messagesQueue.length > 0) {
        setMessages(prevState =>
          [messagesQueue[0], prevState[0], prevState[1]].filter(Boolean),
        );

        messagesQueue.shift();
      }
    }, 3000);
  }, []);

  useEffect(() => {
    api
      .get<Message[]>('messages/last3', {
        headers: {
          code: params.id,
        },
      })
      .then(response => {
        setMessages(response.data);
      });
  }, [params.id]);

  return (
    <Container>
      <h1>{title}</h1>

      <Messages>
        {messages.map(message => {
          return (
            <li key={message.id}>
              <MessageContent>{message.text}</MessageContent>
              <MessageUser>
                <UserImage
                  primaryColor={primaryColor}
                  secondaryColor={secondaryColor}
                >
                  <img src={message.user.avatar_url} alt={message.user.name} />
                </UserImage>
                <span>{message.user.name}</span>
              </MessageUser>
            </li>
          );
        })}
      </Messages>
    </Container>
  );
}
