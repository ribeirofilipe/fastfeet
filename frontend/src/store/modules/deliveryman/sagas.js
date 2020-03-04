import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';

import { getDeliverymenSuccess, deleteDeliverymenSuccess } from './actions';

export function* getDeliverymenRequest({ payload }) {
  try {
    const { deliveryman } = payload;

    const response = yield call(
      api.post,
      `deliverymen${deliveryman ? `?name=${deliveryman}` : ''}`
    );

    yield put(getDeliverymenSuccess(response.data));
  } catch (err) {
    toast.error('Error to get deliverymen.');
  }
}

export function* deleteDeliverymenRequest({ payload }) {
  try {
    const { email } = payload;

    yield call(api.delete, `deliveryman/${email}`);

    yield put(deleteDeliverymenSuccess(email));

    toast.success('Deliveryman deleted with success!');
  } catch (err) {
    toast.error('Error to delete deliveryman.');
  }
}

export default all([
  takeLatest('@deliveryman/GET_REQUEST', getDeliverymenRequest),
  takeLatest('@deliveryman/DELETE_REQUEST', deleteDeliverymenRequest),
]);
