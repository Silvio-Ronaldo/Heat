import { Router } from 'express';

import ensureAuthenticated from './middlewares/ensureAuthenticated';

import AuthenticateUserController from './controllers/AuthenticateUserController';
import CreateMessageController from './controllers/CreateMessageController';
import GetLast3MessagesController from './controllers/GetLast3MessagesController';
import UserProfileController from './controllers/UserProfileController';
import CreateRoomController from './controllers/CreateRoomController';
import GetEventDataController from './controllers/GetEventDataController';
import DeleteRoomController from './controllers/DeleteRoomController';

const router = Router();

const authenticateUserController = new AuthenticateUserController();
const createMessageController = new CreateMessageController();
const getLast3MessagesController = new GetLast3MessagesController();
const userProfileController = new UserProfileController();
const createRoomController = new CreateRoomController();
const getEventDataController = new GetEventDataController();
const deleteRoomController = new DeleteRoomController();

router.post('/authenticate', authenticateUserController.handle);

router.post('/messages', ensureAuthenticated, createMessageController.handle);

router.get('/messages/last3', getLast3MessagesController.handle);

router.get('/profile', ensureAuthenticated, userProfileController.handle);

router.post('/rooms', ensureAuthenticated, createRoomController.handle);

router.get('/rooms/:id', getEventDataController.handle);

router.delete('/rooms/:id', deleteRoomController.handle);

export default router;
