import { Request, Response } from 'express';

import DeleteRoomService from '../services/DeleteRoomService';

class DeleteRoomController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const deleteRoom = new DeleteRoomService();
    const result = await deleteRoom.execute({
      code: id,
    });

    return response.json(result);
  }
}

export default DeleteRoomController;
