import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import SessionController from './app/controllers/SessionController';
import UserController from './app/controllers/UserController';
import RecipientController from './app/controllers/RecipientController';
import FileController from './app/controllers/FileController';
import DeliverymanController from './app/controllers/DeliverymanController';
import DeliveryController from './app/controllers/DeliveryController';
import DeliveryProgressController from './app/controllers/DeliveryProgressController';
import DeliveryProblemController from './app/controllers/DeliveryProblemController';

import sessionStoreValidator from './app/validators/SessionStore';
import userStoreValidator from './app/validators/UserStore';
import recipientStoreValidator from './app/validators/RecipientStore';
import DeliverymanStoreValidator from './app/validators/DeliverymanStore';
import DeliveryProblemStoreValidator from './app/validators/DeliveryProblemStore';

import authMiddleware from './app/middlewares/auth';

const upload = multer(multerConfig);

const routes = new Router();

routes.post('/session', sessionStoreValidator, SessionController.store);
routes.get('/deliveryman/:id', DeliverymanController.show);
routes.get('/deliveryman/:id/deliveries', DeliveryController.deliveries);
routes.get('/deliveryman/:id/deliveried', DeliveryController.deliveried);
routes.post('/deliveries', DeliveryController.index);

routes.post('/delivery/:id/problems', DeliveryProblemStoreValidator, DeliveryProblemController.store);
routes.get('/delivery/:id/problems', DeliveryProblemController.show);

routes.put('/deliveryman/:deliveryman_id/start-delivery/:id', DeliveryProgressController.startOrder);
routes.put('/deliveryman/:deliveryman_id/finish-delivery/:id', DeliveryProgressController.finishOrder);

routes.post('/files', upload.single('file'), FileController.store);

routes.use(authMiddleware);

routes.post('/user', userStoreValidator, UserController.store);

routes.post('/recipient', recipientStoreValidator, RecipientController.store);
routes.post('/recipients', RecipientController.index);
routes.get('/recipient/:cpf', RecipientController.show);
routes.put('/recipient/:cpf', RecipientController.update);
routes.delete('/recipient/:id', RecipientController.destroy);

routes.post('/deliveryman', DeliverymanStoreValidator, DeliverymanController.store);
routes.put('/deliveryman/:email', DeliverymanController.update);
routes.post('/deliverymen', DeliverymanController.index);
routes.delete('/deliveryman/:email', DeliverymanController.destroy);

routes.post('/delivery', DeliveryController.store);
routes.put('/delivery/:id', DeliveryController.update);
routes.delete('/delivery/:id', DeliveryController.destroy);
routes.post('/delivery', DeliveryController.index);
routes.get('/delivery/:id', DeliveryController.show);

routes.post('/problems', DeliveryProblemController.index);
routes.delete('/problem/:id/cancel-delivery', DeliveryProblemController.destroy);


export default routes;
