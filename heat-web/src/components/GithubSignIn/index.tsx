import { VscGithubInverted } from 'react-icons/vsc';

import { Container } from './styles';

type GithubSignInProps = {
  href: string;
};

export function GithubSignIn({ href }: GithubSignInProps) {
  return (
    <Container href={href}>
      <VscGithubInverted size={24} />
      Entrar com Github
    </Container>
  );
}
