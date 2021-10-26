import { VscCopy } from 'react-icons/vsc';

import { Container } from './styles';

type RoomCodeProps = {
  code: string;
};

export function RoomCode({ code }: RoomCodeProps) {
  function copyRoomCodeToClipboard() {
    navigator.clipboard.writeText(code);
  }

  return (
    <Container onClick={copyRoomCodeToClipboard}>
      <VscCopy size={16} color="#ffffff" />
      <span>#{code}</span>
    </Container>
  );
}
