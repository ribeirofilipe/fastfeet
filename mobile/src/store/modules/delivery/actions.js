export function getDeliveriesRequest(id) {
	return {
		type: '@delivery/GET_DELIVERYMAN_DELIVERIES_REQUEST',
		payload: { id },
	};
}

export function getDeliveriesSuccess(deliveries) {
	return {
		type: '@delivery/GET_DELIVERYMAN_DELIVERIES_SUCCESS',
		payload: { deliveries },
	};
}
