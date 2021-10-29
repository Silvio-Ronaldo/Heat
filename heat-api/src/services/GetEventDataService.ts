import prismaClient from '../prisma';

type GetEventDataProps = {
  roomCode: string;
};

class GetEventDataService {
  async execute({ roomCode }: GetEventDataProps) {
    const room = await prismaClient.room.findFirst({
      where: {
        id: roomCode,
      },
    });

    const totalMessages = await prismaClient.message.count({
      where: {
        room_id: roomCode,
      },
    });

    const formattedRoom = {
      ...room,
      totalMessages,
    };

    return formattedRoom;
  }
}

export default GetEventDataService;
