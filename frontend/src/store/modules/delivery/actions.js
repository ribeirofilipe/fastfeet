export function getDeliveriesRequest(product, withProblem, page = 1) {
  return {
    type: '@delivery/GET_REQUEST',
    payload: { product, withProblem, page },
  };
}

export function getDeliveriesSuccess(products) {
  return {
    type: '@delivery/GET_SUCCESS',
    payload: { products },
  };
}

export function deleteDeliverieRequest(id) {
  return {
    type: '@delivery/DELETE_REQUEST',
    payload: { id },
  };
}

export function deleteDeliverieSuccess(id) {
  return {
    type: '@delivery/DELETE_SUCCESS',
    payload: { id },
  };
}

export function saveDeliveryRequest(product) {
  return {
    type: '@delivery/SAVE_REQUEST',
    payload: { product },
  };
}

export function saveDeliverySuccess(product) {
  return {
    type: '@delivery/SAVE_SUCCESS',
    payload: { product },
  };
}

export function updateDeliveryRequest(product) {
  return {
    type: '@delivery/UPDATE_REQUEST',
    payload: { product },
  };
}

export function updateDeliverySuccess(product) {
  return {
    type: '@delivery/UPDATE_SUCCESS',
    payload: { product },
  };
}

export function getDeliveryRequest(id) {
  return {
    type: '@delivery/GET_REQUEST_BY_ID',
    payload: { id },
  };
}

export function getDeliverySuccess(product) {
  return {
    type: '@delivery/GET_SUCCESS_BY_ID',
    payload: { product },
  };
}
