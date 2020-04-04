import produce from 'immer';

const INITIAL_STATE = {
	token: null,
	signed: false,
  loading: false,
  deliveryman: null,
};

export default function deliveryman(state = INITIAL_STATE, action) {
	return produce(state, draft => {
		switch (action.type) {
			case '@deliveryman/SIGN_IN_REQUEST': {
				draft.loading = true;
				break;
			}
			case '@deliveryman/SIGN_IN_SUCCESS': {
				draft.signed = true;
        draft.loading = false;
        draft.deliveryman = action.payload.user;
				break;
			}
			default:
		}
	});
}
