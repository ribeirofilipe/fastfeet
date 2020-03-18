import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';

import { saveFileSuccess } from './actions';

export function* saveFileRequest({ payload }) {
  try {
    const { file } = payload;

    const response = yield call(api.post, 'files', file);

    const { id } = response.data;

    yield put(saveFileSuccess(id));

    toast.success('File saved with success!');
  } catch (err) {
    toast.error('Error to save file.');
  }
}

export default all([takeLatest('@file/SAVE_REQUEST', saveFileRequest)]);
