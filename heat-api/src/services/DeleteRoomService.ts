import prismaClient from '../prisma';

type DeleteRoomProps = {
  code: string;
};

class DeleteRoomService {
  async execute({ code }: DeleteRoomProps) {
    const messages = prismaClient.message.deleteMany({
      where: {
        room_id: code,
      },
    });

    const room = prismaClient.room.delete({
      where: {
        id: code,
      },
    });

    await prismaClient.$transaction([messages, room]);

    return 'Sala fechada com sucesso';
  }
}

export default DeleteRoomService;
