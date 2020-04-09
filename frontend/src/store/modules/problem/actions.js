export function getProblemsRequest(page = 1) {
  return {
    type: '@problem/GET_REQUEST',
    payload: { page },
  };
}

export function getProblemsSuccess(problems) {
  return {
    type: '@problem/GET_SUCCESS',
    payload: { problems },
  };
}

export function cancelProblemRequest(id) {
  return {
    type: '@problem/DELETE_REQUEST',
    payload: { id },
  };
}

export function cancelProblemSuccess(id) {
  return {
    type: '@problem/DELETE_SUCCESS',
    payload: { id },
  };
}
