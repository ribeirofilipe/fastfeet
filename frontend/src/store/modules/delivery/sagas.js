import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';

import { getDeliveriesSuccess } from './actions';

export function* getDeliveryRequest({ payload }) {
  try {
    const { product } = payload;

    const response = yield call(api.post, 'deliveries', {
      query: {
        product,
      },
    });

    yield put(getDeliveriesSuccess(response.data));
  } catch (err) {
    toast.error('Error to get products.');
  }
}

export default all([takeLatest('@delivery/GET_REQUEST', getDeliveryRequest)]);
