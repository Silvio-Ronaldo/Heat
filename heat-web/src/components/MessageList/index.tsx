import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

import { api } from '../../services/api';

import logoImg from '../../assets/logo.svg';

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
  primaryColor: string;
  secondaryColor: string;
};

export function MessageList({
  primaryColor,
  secondaryColor,
}: MessageListProps) {
  const [messages, setMessages] = useState<Message[]>([]);

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
    api.get<Message[]>('messages/last3').then(response => {
      setMessages(response.data);
    });
  }, []);

  return (
    <Container>
      <img src={logoImg} alt="Heat 2021" />

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
