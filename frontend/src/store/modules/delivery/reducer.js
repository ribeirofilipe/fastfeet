import produce from 'immer';

const INITIAL_STATE = {
  products: [],
  product: {},
  total: 0,
  loading: false,
};

export default function delivery(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@deliery/GET_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@delivery/GET_SUCCESS': {
        draft.loading = false;
        draft.products = action.payload.products.orders;
        draft.total = action.payload.products.total;
        break;
      }
      case '@deliery/DELETE_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@delivery/DELETE_SUCCESS': {
        draft.loading = false;
        draft.products = draft.products.filter(
          product => product.id !== action.payload.id
        );
        break;
      }
      case '@delivery/GET_REQUEST_BY_ID': {
        draft.loading = true;
        break;
      }
      case '@delivery/GET_SUCCESS_BY_ID': {
        draft.loading = false;
        draft.product = action.payload.product;
        break;
      }
      default:
    }
  });
}
