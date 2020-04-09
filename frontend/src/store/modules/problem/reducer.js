import produce from 'immer';

const INITIAL_STATE = {
  problems: [],
  loading: false,
};

export default function problem(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@problem/GET_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@problem/GET_SUCCESS': {
        draft.loading = false;
        draft.problems = action.payload.problems;
        break;
      }
      case '@problem/DELETE_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@problem/DELETE_SUCCESS': {
        draft.loading = false;
        draft.problems = draft.problems.filter(
          problemValue => problemValue.delivery_id !== action.payload.id
        );
        break;
      }
      default:
    }
  });
}
