import prismaClient from '../prisma';

type CreateRoomProps = {
  title: string;
  primary_color: string;
  secondary_color: string;
};

class CreateRoomService {
  async execute({ title, primary_color, secondary_color }: CreateRoomProps) {
    const room = await prismaClient.room.create({
      data: {
        title,
        primary_color,
        secondary_color,
      },
    });

    return room;
  }
}

export default CreateRoomService;
