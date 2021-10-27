import { VscCopy } from 'react-icons/vsc';

import { Container } from './styles';

type RoomCodeProps = {
  code: string;
  primaryColor: string;
  secondaryColor: string;
};

export function RoomCode({
  code,
  primaryColor,
  secondaryColor,
}: RoomCodeProps) {
  function copyRoomCodeToClipboard() {
    navigator.clipboard.writeText(code);
  }

  return (
    <Container
      onClick={copyRoomCodeToClipboard}
      primaryColor={primaryColor}
      secondaryColor={secondaryColor}
    >
      <VscCopy size={16} color="#ffffff" />
      <span>#{code}</span>
    </Container>
  );
}
