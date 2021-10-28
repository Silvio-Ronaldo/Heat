import { Request, Response } from 'express';

import CreateRoomService from '../services/CreateRoomService';

class CreateRoomController {
  async handle(request: Request, response: Response) {
    const { title, primary_color, secondary_color } = request.body;
    const { user_id } = request;

    const createRoom = new CreateRoomService();
    const result = await createRoom.execute({
      title,
      primary_color,
      secondary_color,
      user_id,
    });

    return response.json(result);
  }
}

export default CreateRoomController;
