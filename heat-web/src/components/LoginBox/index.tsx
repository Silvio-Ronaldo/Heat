import { useContext } from 'react';

import { AuthContext } from '../../contexts/auth';

import { GithubSignIn } from '../GithubSignIn';

import { Container } from './styles';

export function LoginBox() {
  const { signInUrl } = useContext(AuthContext);

  return (
    <Container>
      <strong>Entre e compartilhe sua mensagem</strong>
      <GithubSignIn href={signInUrl} />
    </Container>
  );
}
