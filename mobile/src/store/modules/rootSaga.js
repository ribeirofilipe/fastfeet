import { all } from 'redux-saga/effects';

import auth from './auth/sagas';
import deliveryman from './deliveryman/sagas';
import delivery from './delivery/sagas';
import problem from './problem/sagas';
import deliveryConfirm from './deliveryConfirm/sagas';
import file from './file/sagas';

export default function* rootSaga() {
	return yield all([
    auth,
    deliveryman,
    delivery,
    problem,
    deliveryConfirm,
    file,
  ]);
}
