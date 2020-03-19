import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';
import history from '~/services/history';

import {
  getDeliveriesSuccess,
  getDeliverySuccess,
  deleteDeliverieSuccess,
  saveDeliverySuccess,
  updateDeliverySuccess,
} from './actions';

export function* getDeliveriesRequest({ payload }) {
  try {
    const { product } = payload;

    const response = yield call(
      api.post,
      `deliveries${product ? `?product=${product}` : ''}`
    );
    yield put(getDeliveriesSuccess(response.data));
  } catch (err) {
    toast.error('Error to get products.');
  }
}

export function* deleteDeliveryRequest({ payload }) {
  try {
    const { id } = payload;

    yield call(api.delete, `delivery/${id}`);

    yield put(deleteDeliverieSuccess(id));

    toast.success('Product deleted with success');
  } catch (err) {
    toast.error('Error to get products.');
  }
}

export function* saveDeliveryRequest({ payload }) {
  try {
    const { product, recipient_id, deliveryman_id } = payload.product;

    const response = yield call(api.post, 'order', {
      product,
      recipient_id,
      deliveryman_id,
    });

    yield put(saveDeliverySuccess(response.data));

    history.push('/delivery');
  } catch (err) {
    toast.error('Error to save delivery.');
  }
}

export function* updateDeliveryRequest({ payload }) {
  try {
    const { id, recipient_id, deliveryman_id } = payload.product;

    const response = yield call(api.put, `order/${id}`, {
      recipient_id,
      deliveryman_id,
    });

    yield put(updateDeliverySuccess(response.data));

    history.push('/delivery');
  } catch (err) {
    toast.error('Error to save delivery.');
  }
}

export function* getDeliveryRequest({ payload }) {
  try {
    const { id } = payload;

    const response = yield call(api.get, `order/${id}`);

    yield put(getDeliverySuccess(response.data));
  } catch (err) {
    toast.error('Error to get delivery.');
  }
}

export default all([
  takeLatest('@delivery/GET_REQUEST', getDeliveriesRequest),
  takeLatest('@delivery/DELETE_REQUEST', deleteDeliveryRequest),
  takeLatest('@delivery/SAVE_REQUEST', saveDeliveryRequest),
  takeLatest('@delivery/UPDATE_REQUEST', updateDeliveryRequest),
  takeLatest('@delivery/GET_REQUEST_BY_ID', getDeliveryRequest),
]);
