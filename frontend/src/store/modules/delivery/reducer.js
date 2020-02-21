import produce from 'immer';

const INITIAL_STATE = {
  products: [],
  loading: false,
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@deliery/GET_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@delivery/GET_SUCCESS': {
        draft.loading = false;
        draft.products = action.payload.products;
        break;
      }
      default:
    }
  });
}
