import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';

import { saveFileSuccess } from './actions';
import {
  saveDeliverymenRequest,
  updateDeliverymenRequest,
} from '../deliveryman/actions';

export function* saveFileRequest({ payload }) {
  try {
    const { id: deliverymanId, file, name, email } = payload;

    const response = yield call(api.post, 'files', file);

    const { id: avatar_id } = response.data;

    const deliveryman = {
      name,
      email,
      avatar_id,
    };

    if (!deliverymanId) {
      yield put(saveDeliverymenRequest(deliveryman));
    } else {
      yield put(updateDeliverymenRequest(deliveryman));
    }

    yield put(saveFileSuccess(avatar_id));

    toast.success('File saved with success!');
  } catch (err) {
    toast.error('Error to save file.');
  }
}

export default all([takeLatest('@file/SAVE_REQUEST', saveFileRequest)]);
