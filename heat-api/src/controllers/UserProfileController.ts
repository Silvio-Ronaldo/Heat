import { Request, Response } from 'express';

import UserProfileService from '../services/UserProfileService';

class UserProfileController {
  async handle(request: Request, response: Response) {
    const { user_id } = request;

    const userProfile = new UserProfileService();

    const result = await userProfile.execute(user_id);

    return response.json(result);
  }
}

export default UserProfileController;
