import { useState } from 'react';
import { VscDeviceCamera } from 'react-icons/vsc';

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

export function CreateEvent() {
  const [eventName, setEventName] = useState('');
  const [primaryColor, setPrimaryColor] = useState('');
  const [secondaryColor, setSecondaryColor] = useState('');

  function handleLogoChange() {}

  function handleCreateEventForm() {}

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
            />

            <Colors>
              <section>
                <label htmlFor="eventPrimaryColor">Primeira cor</label>
                <input
                  type="color"
                  id="eventPrimaryColor"
                  name="eventPrimaryColor"
                />
              </section>

              <section>
                <label htmlFor="eventSecondaryColor">Segunda cor</label>
                <input
                  type="color"
                  id="eventSecondaryColor"
                  name="eventSecondaryColor"
                />
              </section>
            </Colors>

            <button type="submit">Criar evento</button>
          </Form>
        </section>

        <Illustration>
          <img src={bannerGirl} alt="Girl on phone" />
        </Illustration>
      </Content>
    </Container>
  );
}
