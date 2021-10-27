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

    return room;
  }
}

export default GetEventDataService;
