import prismaClient from '../prisma';

type CreateRoomProps = {
  title: string;
  primary_color: string;
  secondary_color: string;
  user_id: string;
};

class CreateRoomService {
  async execute({
    title,
    primary_color,
    secondary_color,
    user_id,
  }: CreateRoomProps) {
    const room = await prismaClient.room.create({
      data: {
        title,
        primary_color,
        secondary_color,
        user_id,
      },
      include: {
        user: true,
      },
    });

    return room;
  }
}

export default CreateRoomService;
