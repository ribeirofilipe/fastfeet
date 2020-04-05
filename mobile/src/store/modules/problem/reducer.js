import produce from 'immer';

const INITIAL_STATE = {
  loading: false,
  problems: [],
};

export default function deliveryman(state = INITIAL_STATE, action) {
	return produce(state, draft => {
		switch (action.type) {
			case '@problem/SEND_PROBLEM_REQUEST': {
				draft.loading = true;
				break;
			}
			case '@problem/SEND_PROBLEM_SUCCESS': {
        draft.loading = false;
				break;
      }
      case '@problem/GET_PROBLEM_REQUEST': {
				draft.loading = true;
				break;
			}
			case '@problem/GET_PROBLEM_SUCCESS': {
        draft.loading = false;
        draft.problems = action.payload.problems
				break;
      }
			default:
		}
	});
}
