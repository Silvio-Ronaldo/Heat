import prismaClient from '../prisma';

type GetLast3MessagesProps = {
  code: string;
};

class GetLast3MessagesService {
  async execute({ code }: GetLast3MessagesProps) {
    const messages = await prismaClient.message.findMany({
      take: 3,
      where: {
        room_id: code,
      },
      orderBy: {
        created_at: 'desc',
      },
      include: {
        user: true,
      },
    });

    return messages;
  }
}

export default GetLast3MessagesService;
