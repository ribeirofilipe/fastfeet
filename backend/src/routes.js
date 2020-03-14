import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import SessionController from './app/controllers/SessionController';
import UserController from './app/controllers/UserController';
import RecipientController from './app/controllers/RecipientController';
import FileController from './app/controllers/FileController';
import DeliverymanController from './app/controllers/DeliverymanController';
import OrderController from './app/controllers/OrderController';
import DeliveryController from './app/controllers/DeliveryController';
import DeliveryProblemController from './app/controllers/DeliveryProblemController';

import sessionStoreValidator from './app/validators/SessionStore';
import userStoreValidator from './app/validators/UserStore';
import recipientStoreValidator from './app/validators/RecipientStore';
import DeliverymanStoreValidator from './app/validators/DeliverymanStore';
import OrderStoreValidator from './app/validators/OrderStore';
import DeliveryProblemStoreValidator from './app/validators/DeliveryProblemStore';

import authMiddleware from './app/middlewares/auth';

const upload = multer(multerConfig);

const routes = new Router();

routes.post('/session', sessionStoreValidator, SessionController.store);

routes.use(authMiddleware);

routes.post('/user', userStoreValidator, UserController.store);

routes.post('/files', upload.single('file'), FileController.store);

routes.post('/recipient', recipientStoreValidator, RecipientController.store);
routes.post('/recipients', RecipientController.index);
routes.put('/recipient/:cpf', RecipientController.update);
routes.delete('/recipient/:id', RecipientController.destroy);

routes.post('/deliveryman', DeliverymanStoreValidator, DeliverymanController.store);
routes.put('/deliveryman/:email', DeliverymanController.update);
routes.post('/deliverymen', DeliverymanController.index);
routes.delete('/deliveryman/:email', DeliverymanController.destroy);

routes.post('/order', OrderStoreValidator, OrderController.store);
routes.put('/order/:id', OrderController.update);
routes.get('/orders', OrderController.index);
routes.delete('/order/:id', OrderController.destroy);

routes.post('/deliveries', DeliveryController.index);
routes.get('/deliveryman/:id', DeliveryController.deliveries);
routes.get('/deliveryman/:id/deliveries', DeliveryController.deliveried);
routes.put('/deliveryman/:deliveryman_id/start-delivery/:id', DeliveryController.startOrder);
routes.put('/deliveryman/:deliveryman_id/finish-delivery/:id', upload.single('file'), DeliveryController.finishOrder);
routes.delete('/delivery/:id', DeliveryController.destroy);

routes.get('/delivery/problems', DeliveryProblemController.index);
routes.get('/delivery/:id/problems', DeliveryProblemController.show);
routes.post('/delivery/:id/problems', DeliveryProblemStoreValidator, DeliveryProblemController.store);
routes.delete('/problem/:id/cancel-delivery', DeliveryProblemController.destroy);

export default routes;
