import produce from 'immer';

const INITIAL_STATE = {
  deliverymen: [],
  loading: false,
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@deliveryman/GET_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@deliveryman/GET_SUCCESS': {
        draft.loading = false;
        draft.deliverymen = action.payload.deliverymen;
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
      default:
    }
  });
}
