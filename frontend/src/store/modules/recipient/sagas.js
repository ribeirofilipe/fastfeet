import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';

import { getRecipientSuccess, deleteRecipientSuccess } from './actions';

export function* getRecipientRequest({ payload }) {
  try {
    const { recipient } = payload;

    const response = yield call(
      api.post,
      `recipients${recipient ? `?name=${recipient}` : ''}`
    );

    yield put(getRecipientSuccess(response.data));
  } catch (err) {
    toast.error('Error to get deliverymen.');
  }
}

export function* deleteRecipientRequest({ payload }) {
  try {
    const { id } = payload;

    yield call(api.delete, `recipient/${id}`);

    yield put(deleteRecipientSuccess(id));

    toast.success('Recipient deleted with success!');
  } catch (err) {
    toast.error('Error to delete recipient.');
  }
}

export default all([
  takeLatest('@recipient/GET_REQUEST', getRecipientRequest),
  takeLatest('@recipient/DELETE_REQUEST', deleteRecipientRequest),
]);
