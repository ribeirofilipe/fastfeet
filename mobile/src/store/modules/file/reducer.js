import produce from 'immer';

const INITIAL_STATE = {
  id: null,
};

export default function file(state = INITIAL_STATE, action) {
	return produce(state, draft => {
		switch (action.type) {
			case '@file/SEND_FILE_REQUEST': {
				break;
      }
      case '@file/SEND_FILE_SUCCESS': {
        draft.id = action.payload.id;
				break;
			}
			default:
		}
	});
}
