export function getDeliverymenRequest(deliverymen) {
  return {
    type: '@deliveryman/GET_REQUEST',
    payload: { deliverymen },
  };
}

export function getDeliverymenSuccess(deliverymen) {
  return {
    type: '@deliveryman/GET_SUCCESS',
    payload: { deliverymen },
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
