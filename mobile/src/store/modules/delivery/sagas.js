import { Alert } from 'react-native';
import { takeLatest, call, put, all } from 'redux-saga/effects';

import api from '~/services/api';

import { getDeliveriesSuccess, getDeliveriesPendingSuccess, startDeliverySuccess } from './actions';

export function* getDeliveries({ payload }) {
  try {
    const { id } = payload;

    const response = yield call(
      api.get,
      `deliveryman/${id}/deliveried`
    );

    yield put(getDeliveriesSuccess(response.data));
  } catch (err) {
    Alert.alert(
      'Falha ao buscar entregas',
      'Houve um erro, verifique seus dados'
    );
  }
}

export function* getDeliveriesṔending({ payload }) {
  try {
    const { id } = payload;

    const response = yield call(
      api.get,
      `deliveryman/${id}/deliveries`
    );

    yield put(getDeliveriesPendingSuccess(response.data));
  } catch (err) {
    Alert.alert(
      'Falha ao buscar entregas',
      'Houve um erro, verifique seus dados'
    );
  }
}

export function* startDelivery({ payload }) {
  try {
    const { id, deliveryman_id } = payload;

    yield call(
      api.put,
      `/deliveryman/${deliveryman_id}/start-delivery/${id}`);

    yield put(startDeliverySuccess());

    Alert.alert(
      'Sucesso!',
      'Encomenda iniciada!'
    );
  } catch (err) {
    Alert.alert(
      'Falha ao finalizar uma entrega',
      'Houve um erro, verifique seus dados'
    );
  }
}


export default all([
  takeLatest('@delivery/GET_DELIVERYMAN_DELIVERIES_REQUEST', getDeliveries),
  takeLatest('@delivery/GET_DELIVERYMAN_DELIVERIES_PENDING_REQUEST', getDeliveriesṔending),
  takeLatest('@delivery/START_DELIVERY_REQUEST', startDelivery),
]);
