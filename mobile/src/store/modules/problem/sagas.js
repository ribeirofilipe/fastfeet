import { Alert } from 'react-native';
import { takeLatest, call, put, all } from 'redux-saga/effects';

import api from '~/services/api';

import { sendProblemSuccess, getProblemsSuccess } from './actions';

export function* sendProblem({ payload }) {
  try {
    const { id, description } = payload;

    yield call(api.post, `delivery/${id}/problems`,
    {
       description
    });

    yield put(sendProblemSuccess());

    Alert.alert(
      'Sucesso!',
      'Problema registrado.'
    );
  } catch (err) {
    Alert.alert(
      'Falha ao registrar novo problema',
      'Houve um erro, verifique seus dados'
    );
  }
}

export function* getProblems({ payload }) {
  try {
    const { id } = payload;

    const response = yield call(api.get, `delivery/${id}/problems`);

    yield put(getProblemsSuccess(response.data));
  } catch (err) {
    Alert.alert(
      'Falha ao buscar problemas',
      'Houve um erro, verifique seus dados'
    );
  }
}

export default all([
  takeLatest('@problem/SEND_PROBLEM_REQUEST', sendProblem),
  takeLatest('@problem/GET_PROBLEM_REQUEST', getProblems),
]);
