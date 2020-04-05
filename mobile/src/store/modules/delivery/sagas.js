import { Alert } from 'react-native';
import { takeLatest, call, put, all } from 'redux-saga/effects';

import api from '~/services/api';

import { getDeliveriesSuccess } from './actions';

export function* getDeliveries({ payload }) {
  try {
    const { id } = payload;

    const response = yield call(
      api.get,
      `deliveryman/${id}/deliveries`
    );

    yield put(getDeliveriesSuccess(response.data));
  } catch (err) {
    Alert.alert(
      'Falha ao buscar entregas',
      'Houve um erro, verifique seus dados'
    );
  }
}

export default all([takeLatest('@delivery/GET_DELIVERYMAN_DELIVERIES_REQUEST', getDeliveries)]);
