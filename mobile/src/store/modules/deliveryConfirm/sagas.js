import { Alert } from 'react-native';
import { parseISO, format } from 'date-fns';
import { takeLatest, call, put, all } from 'redux-saga/effects';

import api from '~/services/api';

import { sendDeliveryConfirmSuccess } from './actions';

export function* sendDeliveryConfirm({ payload }) {
  try {
    const { id, deliveryman_id, signature_id } = payload;

    const response = yield call(
      api.put,
      `/deliveryman/${deliveryman_id}/finish-delivery/${id}`, { signature_id });

    yield put(sendDeliveryConfirmSuccess(id, response.data.end_date));
  } catch (err) {
    Alert.alert(
      'Falha ao finalizar uma entrega',
      'Houve um erro,'
    );
  }
}

export default all([takeLatest('@deliveryConfirm/SEND_DELIVERY_CONFIRM_REQUEST', sendDeliveryConfirm)]);
