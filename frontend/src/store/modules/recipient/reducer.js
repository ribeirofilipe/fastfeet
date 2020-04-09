import produce from 'immer';

const INITIAL_STATE = {
  recipients: [],
  recipient: {},
  total: 0,
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
        draft.recipients = action.payload.recipients.recipients;
        draft.total = action.payload.recipients.total;
        break;
      }
      case '@recipient/GET_REQUEST_BY_ID': {
        draft.loading = true;
        break;
      }
      case '@recipient/GET_SUCCESS_BY_ID': {
        draft.loading = false;
        draft.recipient = action.payload.recipient;
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
