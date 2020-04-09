import produce from 'immer';
import { format, parseISO } from 'date-fns';

const INITIAL_STATE = {
  loading: false,
  new: false,
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
        draft.new = !draft.new;
				break;
      }
      case '@problem/GET_PROBLEM_REQUEST': {
				draft.loading = true;
				break;
			}
			case '@problem/GET_PROBLEM_SUCCESS': {
        console.tron.log(action.payload.problems);
        draft.loading = false;
        draft.problems = action.payload.problems.map(problem => ({
          ...problem,
          created_at: format(parseISO(problem.createdAt), 'dd/MM/yyyy'),
        }));
				break;
      }
			default:
		}
	});
}
