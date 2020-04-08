import produce from 'immer';

const INITIAL_STATE = {
  loading: false,
};

export default function deliveryConfirm(state = INITIAL_STATE, action) {
	return produce(state, draft => {
		switch (action.type) {
			case '@deliveryConfirm/SEND_DELIVERY_CONFIRM_REQUEST': {
				draft.loading = true;
				break;
			}
			case '@deliveryConfirm/SEND_DELIVERY_CONFIRM_SUCCESS': {
        draft.loading = false;
				break;
      }
			default:
		}
	});
}
