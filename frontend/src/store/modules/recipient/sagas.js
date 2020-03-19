import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';
import history from '~/services/history';

import {
  getRecipientsSuccess,
  getRecipientSuccess,
  deleteRecipientSuccess,
  saveRecipientSuccess,
  updateRecipientSuccess,
} from './actions';

export function* getRecipientsRequest({ payload }) {
  try {
    const { recipient } = payload;

    const response = yield call(
      api.post,
      `recipients${recipient ? `?name=${recipient}` : ''}`
    );

    yield put(getRecipientsSuccess(response.data));
  } catch (err) {
    toast.error('Error to get deliverymen.');
  }
}

export function* getRecipientRequest({ payload }) {
  try {
    const { id } = payload;

    const response = yield call(api.get, `recipient/${id}`);

    yield put(getRecipientSuccess(response.data));
  } catch (err) {
    toast.error('Error to get deliveryman.');
  }
}

export function* saveRecipientRequest({ payload }) {
  try {
    const {
      cpf,
      name,
      street,
      number,
      city,
      state,
      postal_code,
    } = payload.recipient;

    const response = yield call(api.post, 'recipient', {
      cpf,
      name,
      street,
      number,
      city,
      state,
      postal_code,
    });

    yield put(saveRecipientSuccess(response.data));

    history.push('/recipient');
  } catch (err) {
    toast.error('Error to save deliverymen.');
  }
}

export function* updateRecipientRequest({ payload }) {
  try {
    const {
      cpf,
      name,
      street,
      number,
      city,
      state,
      postal_code,
    } = payload.recipient;

    const response = yield call(api.put, `recipient/${cpf}`, {
      name,
      street,
      number,
      city,
      state,
      postal_code,
    });

    yield put(updateRecipientSuccess(response.data));

    history.push('/recipient');
  } catch (err) {
    toast.error('Error to save recipient.');
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
  takeLatest('@recipient/GET_REQUEST', getRecipientsRequest),
  takeLatest('@recipient/GET_REQUEST_BY_ID', getRecipientRequest),
  takeLatest('@recipient/DELETE_REQUEST', deleteRecipientRequest),
  takeLatest('@recipient/UPDATE_REQUEST', updateRecipientRequest),
  takeLatest('@recipient/SAVE_REQUEST', saveRecipientRequest),
]);
