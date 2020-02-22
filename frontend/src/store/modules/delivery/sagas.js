import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';

import { getDeliveriesSuccess, deleteDeliverieSuccess } from './actions';

export function* getDeliveryRequest({ payload }) {
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

    toast.success('Product deleted with success!');
  } catch (err) {
    toast.error('Error to get products.');
  }
}

export default all([
  takeLatest('@delivery/GET_REQUEST', getDeliveryRequest),
  takeLatest('@delivery/DELETE_REQUEST', deleteDeliveryRequest),
]);
