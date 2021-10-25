import { BrowserRouter } from 'react-router-dom';

import { Routes } from './routes';

import { Container } from './styles/app';

export function App() {
  return (
    <BrowserRouter>
      <Container>
        <Routes />
      </Container>
    </BrowserRouter>
  );
}
