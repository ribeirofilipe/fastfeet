import produce from 'immer';

const INITIAL_STATE = {
  deliverymen: [],
  deliveryman: null,
  total: 0,
  loading: false,
};

export default function deliveryman(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@deliveryman/GET_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@deliveryman/GET_SUCCESS': {
        draft.loading = false;
        draft.deliverymen = action.payload.deliverymen.deliverymen;
        draft.total = action.payload.deliverymen.total;
        break;
      }
      case '@deliveryman/GET_REQUEST_BY_ID': {
        draft.loading = true;
        break;
      }
      case '@deliveryman/GET_SUCCESS_BY_ID': {
        draft.loading = false;
        draft.deliveryman = action.payload.deliveryman;
        break;
      }
      case '@deliveryman/DELETE_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@deliveryman/DELETE_SUCCESS': {
        draft.loading = false;
        draft.deliverymen = draft.deliverymen.filter(
          deliverymen => deliverymen.email !== action.payload.email
        );
        break;
      }
      case '@deliveryman/CLEAN': {
        draft.deliveryman = null;
        break;
      }
      default:
    }
  });
}
