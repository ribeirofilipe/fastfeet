import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import SessionController from './app/controllers/SessionController';
import UserController from './app/controllers/UserController';
import RecipientController from './app/controllers/RecipientController';
import FileController from './app/controllers/FileController';
import DeliverymanController from './app/controllers/DeliverymanController';

import sessionStoreValidator from './app/validators/SessionStore';
import userStoreValidator from './app/validators/UserStore';
import recipientStoreValidator from './app/validators/RecipientStore';

import authMiddleware from './app/middlewares/auth';
import DeliverymanStore from './app/validators/DeliverymanStore';

const upload = multer(multerConfig);

const routes = new Router();

routes.post('/session', sessionStoreValidator, SessionController.store);

routes.use(authMiddleware);

routes.post('/user', userStoreValidator, UserController.store);

routes.post('/recipient', recipientStoreValidator, RecipientController.store);
routes.put('/recipient/:cpf', RecipientController.update);

routes.post('/files', upload.single('file'), FileController.store);

routes.post('/deliveryman', DeliverymanStore, DeliverymanController.store);
routes.put('/deliveryman/:email', DeliverymanController.update);
routes.get('/deliverymans', DeliverymanController.index);
routes.delete('/deliveryman/:email', DeliverymanController.destroy);


export default routes;
