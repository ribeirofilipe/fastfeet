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
