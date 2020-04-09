import { Alert } from 'react-native';
import { takeLatest, call, put, all } from 'redux-saga/effects';

import api from '~/services/api';

import { sendFileSuccess } from './actions';

export function* sendFile({ payload }) {
  try {
    const { filename, originalname } = payload;

    const response = yield call(
      api.post,
      'files', {
        filename,
        originalname
      }
    );

    yield put(sendFileSuccess(response.data.id));

    Alert.alert(
      'Sucesso!',
      'Entrega finalizada!'
    );

  } catch (err) {
    Alert.alert(
      'Falha ao cadastrar nova imagem',
      'Houve um erro, verifique seus dados'
    );
  }
}

export default all([takeLatest('@file/SEND_FILE_REQUEST', sendFile)]);
