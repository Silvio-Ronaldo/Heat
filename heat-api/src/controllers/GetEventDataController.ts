import { Request, Response } from 'express';

import GetEventDataService from '../services/GetEventDataService';

class GetEventDataController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const getEventData = new GetEventDataService();
    const result = await getEventData.execute({
      roomCode: id,
    });

    return response.json(result);
  }
}

export default GetEventDataController;
