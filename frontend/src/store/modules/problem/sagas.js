import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';

import { cancelProblemSuccess, getProblemsSuccess } from './actions';

export function* getProblemRequest() {
  try {
    const response = yield call(api.get, 'delivery/problems');

    yield put(getProblemsSuccess(response.data));
  } catch (err) {
    toast.error('Error to get problems.');
  }
}

export function* cancelProblemRequest({ payload }) {
  try {
    const { id } = payload;

    yield call(api.delete, `problem/${id}/cancel-delivery`);

    yield put(cancelProblemSuccess(id));

    toast.success('Delivery canceled with success!');
  } catch (err) {
    toast.error('Error to cancel delivery.');
  }
}

export default all([
  takeLatest('@problem/GET_REQUEST', getProblemRequest),
  takeLatest('@problem/DELETE_REQUEST', cancelProblemRequest),
]);
