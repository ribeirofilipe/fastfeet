import { Router } from 'express';

import SessionController from './app/controllers/SessionController';
import UserController from './app/controllers/UserController';
import RecipientController from './app/controllers/RecipientController';

import sessionStoreValidator from './app/validators/SessionStore';
import userStoreValidator from './app/validators/UserStore';
import recipientStoreValidator from './app/validators/RecipientStore';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/session', sessionStoreValidator, SessionController.store);

routes.use(authMiddleware);

routes.post('/user', userStoreValidator, UserController.store);

routes.post('/recipient', recipientStoreValidator, RecipientController.store);
routes.put('/recipient/:cpf', RecipientController.update);

export default routes;
