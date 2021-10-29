import { Request, Response } from 'express';

import GetLast3MessagesService from '../services/GetLast3MessagesService';

class GetLast3MessagesController {
  async handle(request: Request, response: Response) {
    const code = request.headers.code as string;

    const getLast3Messages = new GetLast3MessagesService();

    const result = await getLast3Messages.execute({ code });

    return response.json(result);
  }
}

export default GetLast3MessagesController;
