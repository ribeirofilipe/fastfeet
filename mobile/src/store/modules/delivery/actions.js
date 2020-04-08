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

export function getDeliveriesPendingRequest(id) {
	return {
		type: '@delivery/GET_DELIVERYMAN_DELIVERIES_PENDING_REQUEST',
		payload: { id },
	};
}

export function getDeliveriesPendingSuccess(deliveriesPending) {
	return {
		type: '@delivery/GET_DELIVERYMAN_DELIVERIES_PENDING_SUCCESS',
		payload: { deliveriesPending },
	};
}

export function startDeliveryRequest(id, deliveryman_id) {
	return {
		type: '@delivery/START_DELIVERY_REQUEST',
		payload: { id, deliveryman_id},
	};
}

export function startDeliverySuccess() {
	return {
		type: '@delivery/START_DELIVERY_SUCCESS',
	};
}
