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
