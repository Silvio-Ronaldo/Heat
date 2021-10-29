import { Request, Response } from 'express';

import CreateMessageService from '../services/CreateMessageService';

class CreateMessageController {
  async handle(request: Request, response: Response) {
    const { message } = request.body;
    const { user_id } = request;
    const code = request.headers.code as string;

    const createMessage = new CreateMessageService();
    const result = await createMessage.execute({
      text: message,
      code,
      user_id,
    });

    return response.json(result);
  }
}

export default CreateMessageController;
