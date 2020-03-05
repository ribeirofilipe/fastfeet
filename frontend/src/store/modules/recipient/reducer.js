import produce from 'immer';

const INITIAL_STATE = {
  recipients: [],
  loading: false,
};

export default function recipient(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@recipient/GET_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@recipient/GET_SUCCESS': {
        draft.loading = false;
        draft.recipients = action.payload.recipients;
        break;
      }
      case '@recipient/DELETE_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@recipient/DELETE_SUCCESS': {
        draft.loading = false;
        draft.recipients = draft.recipients.filter(
          recipientValue => recipientValue.id !== action.payload.id
        );
        break;
      }
      default:
    }
  });
}
