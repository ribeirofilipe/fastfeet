export function getDeliverymenRequest(deliveryman) {
  return {
    type: '@deliveryman/GET_REQUEST',
    payload: { deliveryman },
  };
}

export function getDeliverymenSuccess(deliverymen) {
  return {
    type: '@deliveryman/GET_SUCCESS',
    payload: { deliverymen },
  };
}

export function getDeliverymanRequest(id) {
  return {
    type: '@deliveryman/GET_REQUEST_BY_ID',
    payload: { id },
  };
}

export function getDeliverymanSuccess(deliveryman) {
  return {
    type: '@deliveryman/GET_SUCCESS_BY_ID',
    payload: { deliveryman },
  };
}

export function saveDeliverymenRequest(deliveryman) {
  return {
    type: '@deliveryman/SAVE_REQUEST',
    payload: { deliveryman },
  };
}

export function saveDeliverymenSuccess(deliveryman) {
  return {
    type: '@deliveryman/SAVE_SUCCESS',
    payload: { deliveryman },
  };
}

export function updateDeliverymenRequest(deliveryman) {
  return {
    type: '@deliveryman/UPDATE_REQUEST',
    payload: { deliveryman },
  };
}

export function updateDeliverymenSuccess(deliveryman) {
  return {
    type: '@deliveryman/UPDATE_SUCCESS',
    payload: { deliveryman },
  };
}

export function deleteDeliverymenRequest(email) {
  return {
    type: '@deliveryman/DELETE_REQUEST',
    payload: { email },
  };
}

export function deleteDeliverymenSuccess(email) {
  return {
    type: '@deliveryman/DELETE_SUCCESS',
    payload: { email },
  };
}

export function cleanDeliveryForm() {
  return {
    type: '@deliveryman/CLEAN',
  };
}
