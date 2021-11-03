import { FormEvent, useState, useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Lottie from 'react-lottie';

import { api } from '../../services/api';
import { AuthContext } from '../../contexts/auth';

import { Header } from '../../components/Header';
import { GithubSignIn } from '../../components/GithubSignIn';

import flameAnimation from '../../assets/18587-flame-animation.json';

import {
  Container,
  Content,
  Title,
  Form,
  Colors,
  Illustration,
} from './styles';

type RoomData = {
  id: string;
  title: string;
  primary_color: string;
  secondary_color: string;
};

export function CreateEvent() {
  const history = useHistory();

  const { signInUrl, authenticatedUser } = useContext(AuthContext);

  const [eventName, setEventName] = useState('');
  const [primaryColor, setPrimaryColor] = useState('');
  const [secondaryColor, setSecondaryColor] = useState('');

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: flameAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  useEffect(() => {
    const page = '/new';
    localStorage.setItem('@heat:page', page);
  }, []);

  async function handleCreateEventForm(event: FormEvent) {
    event.preventDefault();

    if (!authenticatedUser) {
      alert('Efetue o login para criar um evento');
      return;
    }

    if (eventName.trim() === '') {
      alert('Adicione um nome ao evento');
      return;
    }

    const { data } = await api.post<RoomData>('/rooms', {
      title: eventName,
      primary_color: primaryColor,
      secondary_color: secondaryColor,
    });

    history.push(`/admin/events/${data.id}`);
  }

  return (
    <Container>
      <Header />

      <Content>
        <section>
          <Title>Adicione as informações do seu evento</Title>

          <Form onSubmit={handleCreateEventForm}>
            <input
              type="text"
              id="eventName"
              name="eventName"
              placeholder="Qual o nome do evento?"
              onChange={event => setEventName(event.target.value)}
              value={eventName}
            />

            <Colors>
              <section>
                <label htmlFor="eventPrimaryColor">Primeira cor</label>
                <input
                  type="color"
                  id="eventPrimaryColor"
                  name="eventPrimaryColor"
                  onChange={event => setPrimaryColor(event.target.value)}
                  value={primaryColor}
                />
              </section>

              <section>
                <label htmlFor="eventSecondaryColor">Segunda cor</label>
                <input
                  type="color"
                  id="eventSecondaryColor"
                  name="eventSecondaryColor"
                  onChange={event => setSecondaryColor(event.target.value)}
                  value={secondaryColor}
                />
              </section>
            </Colors>

            <button type="submit">CRIAR EVENTO</button>
          </Form>
        </section>

        <Illustration>
          <p>VAI PEGAR FOGO!</p>
          <Lottie options={defaultOptions} height={300} width={300} />
          {!authenticatedUser && <GithubSignIn href={signInUrl} />}
        </Illustration>
      </Content>
    </Container>
  );
}
