import { useContext } from 'react';
import { VscGithubInverted } from 'react-icons/vsc';

import { AuthContext } from '../../contexts/auth';

import { Container, SignInWithGithub } from './styles';

export function LoginBox() {
  const { signInUrl } = useContext(AuthContext);

  return (
    <Container>
      <strong>Entre e compartilhe sua mensagem</strong>
      <SignInWithGithub href={signInUrl}>
        <VscGithubInverted size={24} />
        Entrar com Github
      </SignInWithGithub>
    </Container>
  );
}
