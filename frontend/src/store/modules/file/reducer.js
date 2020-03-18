import produce from 'immer';

const INITIAL_STATE = {
  avatar_id: 0,
  loading: false,
};

export default function file(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@file/SAVE_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@file/SAVE_SUCCESS': {
        draft.loading = false;
        draft.avatar_id = action.payload.avatar_id;
        break;
      }
      default:
    }
  });
}
