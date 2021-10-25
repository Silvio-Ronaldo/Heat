import { VscFlame } from 'react-icons/vsc';

import { Container } from './styles';

export function Header() {
  return (
    <Container>
      <h1>Heat</h1>
      <VscFlame color="orangered" />
    </Container>
  );
}
