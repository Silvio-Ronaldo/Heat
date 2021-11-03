import prismaClient from '../prisma';

import { io } from '../app';

type CreateMessageProps = {
  text: string;
  code: string;
  user_id: string;
};
class CreateMessageService {
  async execute({ text, code, user_id }: CreateMessageProps) {
    const message = await prismaClient.message.create({
      data: {
        text,
        room_id: code,
        user_id,
      },
      include: {
        user: true,
      },
    });

    const infoWebSocket = {
      text: message.text,
      user_id: message.user_id,
      created_at: message.created_at,
      user: {
        name: message.user.name,
        avatar_url: message.user.avatar_url,
      },
    };

    io.emit('new_message', infoWebSocket);

    return message;
  }
}

export default CreateMessageService;
