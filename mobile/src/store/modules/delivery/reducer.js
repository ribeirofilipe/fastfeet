import produce from 'immer';

const INITIAL_STATE = {
	token: null,
	signed: false,
  loading: false,
  deliveryman: null,
  deliveries: [],
};

export default function delivery(state = INITIAL_STATE, action) {
	return produce(state, draft => {
		switch (action.type) {
			case '@delivery/GET_DELIVERYMAN_DELIVERIES_REQUEST': {
				draft.loading = true;
				break;
			}
			case '@delivery/GET_DELIVERYMAN_DELIVERIES_SUCCESS': {
				draft.signed = true;
        draft.loading = false;
        draft.deliveries = action.payload.deliveries;
				break;
			}
			default:
		}
	});
}
