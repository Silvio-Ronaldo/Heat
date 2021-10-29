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

    if (!room) {
      return null;
    }

    const total_messages = await prismaClient.message.count({
      where: {
        room_id: roomCode,
      },
    });

    const formattedRoom = {
      ...room,
      total_messages,
    };

    return formattedRoom;
  }
}

export default GetEventDataService;
