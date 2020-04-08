import { Alert } from 'react-native';
import { takeLatest, call, put, all } from 'redux-saga/effects';

import api from '~/services/api';

import { sendFileSuccess } from './actions';

export function* sendFile({ payload }) {
  try {
    const { originalname, filename } = payload;

    const response = yield call(
      api.post,
      'files', {
        originalname,
        filename
      }
    );

    yield put(sendFileSuccess(response.data.id));
  } catch (err) {
    Alert.alert(
      'Falha ao cadastrar nova imagem',
      'Houve um erro, verifique seus dados'
    );
  }
}

export default all([takeLatest('@file/SEND_FILE_REQUEST', sendFile)]);
