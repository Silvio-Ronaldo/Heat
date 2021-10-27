import { FormEvent, useState } from 'react';
import { VscDeviceCamera } from 'react-icons/vsc';
import { useHistory } from 'react-router-dom';

import { api } from '../../services/api';

import { Header } from '../../components/Header';

import {
  Container,
  Content,
  Title,
  Form,
  LogoInput,
  Colors,
  Illustration,
} from './styles';

import bannerGirl from '../../assets/banner-girl.png';

type RoomData = {
  id: string;
  title: string;
  primary_color: string;
  secondary_color: string;
};

export function CreateEvent() {
  const history = useHistory();

  const [eventName, setEventName] = useState('');
  const [primaryColor, setPrimaryColor] = useState('');
  const [secondaryColor, setSecondaryColor] = useState('');

  function handleLogoChange() {}

  async function handleCreateEventForm(event: FormEvent) {
    event.preventDefault();

    if (eventName.trim() === '') {
      return;
    }

    const { data } = await api.post<RoomData>('/rooms', {
      title: eventName,
      primary_color: primaryColor,
      secondary_color: secondaryColor,
    });

    history.push(`/events/${data.id}`);
  }

  return (
    <Container>
      <Header />

      <Content>
        <section>
          <Title>Adicione as informações do seu evento</Title>

          <Form onSubmit={handleCreateEventForm}>
            <LogoInput>
              <img
                src="https://github.com/Silvio-Ronaldo.png"
                alt="Logo do evento"
              />
              <label htmlFor="avatar">
                <VscDeviceCamera />

                <input type="file" id="avatar" onChange={handleLogoChange} />
              </label>
            </LogoInput>

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
          <img src={bannerGirl} alt="Girl on phone" />
        </Illustration>
      </Content>
    </Container>
  );
}
