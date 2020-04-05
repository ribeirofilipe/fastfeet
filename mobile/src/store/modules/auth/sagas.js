import { Alert } from 'react-native';
import { parseISO, format } from 'date-fns';
import { takeLatest, call, put, all } from 'redux-saga/effects';

import api from '~/services/api';

import { signInSuccess, signFailure } from './actions';

export function* singIn({ payload }) {
  try {

    const { id } = payload;

    const { name, email, createdAt, avatar } = yield call(
      api.get,
      `deliveryman/${id}`
    );

    yield put(
      signInSuccess({
        id,
        name,
        email,
        created_at: format(parseISO(createdAt), 'dd/MM/yyyy'),
        avatar,
      })
    );
  } catch (err) {
    Alert.alert(
      'Falha na autenticação',
      'Houve um erro no login, verifique seus dados'
    );
    yield put(signFailure());
  }
}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', singIn)]);
