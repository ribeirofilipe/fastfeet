import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';
import history from '~/services/history';

import {
  getDeliverymenSuccess,
  getDeliverymanSuccess,
  saveDeliverymenSuccess,
  deleteDeliverymenSuccess,
  updateDeliverymenSuccess,
} from './actions';

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

export function* getDeliverymanRequest({ payload }) {
  try {
    const { id } = payload;

    const response = yield call(api.get, `deliveryman/${id}`);

    yield put(getDeliverymanSuccess(response.data));
  } catch (err) {
    toast.error('Error to get deliveryman.');
  }
}

export function* saveDeliverymenRequest({ payload }) {
  try {
    const { name, email, avatar_id } = payload.deliveryman;

    const response = yield call(api.post, 'deliveryman', {
      name,
      email,
      avatar_id,
    });

    yield put(saveDeliverymenSuccess(response.data));

    history.push('/deliveryman');
  } catch (err) {
    toast.error('Error to save deliverymen.');
  }
}

export function* updateDeliverymenRequest({ payload }) {
  try {
    const { name, email, avatar_id } = payload.deliveryman;

    const response = yield call(api.put, `deliveryman/${email}`, {
      name,
      avatar_id,
    });

    yield put(updateDeliverymenSuccess(response.data));

    history.push('/deliveryman');
  } catch (err) {
    toast.error('Error to save deliverymen.');
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
  takeLatest('@deliveryman/GET_REQUEST_BY_ID', getDeliverymanRequest),
  takeLatest('@deliveryman/DELETE_REQUEST', deleteDeliverymenRequest),
  takeLatest('@deliveryman/SAVE_REQUEST', saveDeliverymenRequest),
  takeLatest('@deliveryman/UPDATE_REQUEST', updateDeliverymenRequest),
]);
