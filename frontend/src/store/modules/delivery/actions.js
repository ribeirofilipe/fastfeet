export function getDeliveriesRequest(product) {
  return {
    type: '@delivery/GET_REQUEST',
    payload: { product },
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
